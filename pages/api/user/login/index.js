import {
    findUserByAccessToken,
    findUserByEmail,
    findUserById, findUserByRefreshToken,
    findUserByToken,
    findUserWithEmailAndPassword,
    genuuid,
    insertUser, loginUserWithEmailAndPassword
} from '@/lib/db';
import { getMongoDb } from '@/lib/mongodb';
import {genToken} from "@/pages/api/user";
import Cookies from 'cookies'

export default async function handler(req, res) {
    const db = await getMongoDb();

    const parsedBody = JSON.parse(req.body);
    const cookies = new Cookies(req, res)

    if (req.method === "POST" && (!parsedBody.accessToken && !parsedBody.refreshToken)) {
        if (parsedBody.email) {
            if (!await findUserByEmail(db, parsedBody.email)) {
                return res
                    .status(403)
                    .json({error: {message: 'The email does not exist.'}});
            }
        }

        const user = await loginUserWithEmailAndPassword(db, parsedBody.email, parsedBody.password);
        if (user === null) {
            return res
                .status(403)
                .json({error: {message: 'The password is incorrect.'}});
        }
        cookies.set("refreshToken", user.refreshToken, {
            httpOnly: true,
            sameSite: 'lax',
        });

        return res.status(200).json({ user: { ...user, refreshToken: undefined } });
    }

    if (parsedBody.accessToken) {
        console.log("access token: " + parsedBody.accessToken);

        const user = await findUserByAccessToken(db, parsedBody.id, parsedBody.accessToken);
        if (!user) {
            console.log("user not found")
            return res.status(403).json({ error: { error: "An error occurred. (developer testing, user not found)" }});
        }
        if (user.accessToken === undefined) {
            console.log("access token expired and is undefined")

            const refreshToken = cookies.get('refreshToken')
            const clientSecret = cookies.get("clientSecret")

            if (refreshToken) {
                await findUserByRefreshToken(db, refreshToken, parsedBody.id, clientSecret);
            }
        }
        return res.status(200).json({ user: user })
    }

    const refreshToken = cookies.get('refreshToken')

    let clientID = parsedBody.clientID;
    let clientSecret = parsedBody.clientSecret;

    if (refreshToken && clientID && clientSecret) {
        const user = await findUserByRefreshToken(db, refreshToken, clientID, clientSecret);
        if (user.refreshToken === "refresh_token") {
            return res
                .status(403)
                .json({error: {message: 'refresh_access_token'}});
        }
        return res.status(200).json({ user: user });
    }
    return res.status(403).json({ error: { error: "An error occurred. (developer testing, token & client id & secret null" }});

}