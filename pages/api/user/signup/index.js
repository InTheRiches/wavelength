import {findUserByEmail, findUserById, findUserByToken, findUserByUsername, genuuid, insertUser} from '@/lib/db';
import { getMongoDb } from '@/lib/mongodb';
import {genToken} from "@/pages/api/user";
import Cookies from "cookies";

export default async function handler(req, res) {
    const db = await getMongoDb();

    const cookies = new Cookies(req, res);

    const parsedBody = JSON.parse(req.body);

    if (req.method === "POST" && !parsedBody.token) {
        if (parsedBody.email) {
            if (await findUserByEmail(db, parsedBody.email)) {
                return res
                    .status(403)
                    .json({error: {message: 'The email has already been taken.'}});
            }
        }

        const id = genuuid();
        const refreshToken = genToken();
        cookies.set('refreshToken', refreshToken, {
            httpOnly: true,
            sameSite: 'lax',
        })
        const accessToken = genToken();

        const user = await insertUser(db, {
            email: parsedBody.email,
            id: id,
            oldPassword: parsedBody.password,
            refreshToken: refreshToken,
            accessToken: accessToken,
        });

        cookies.set("clientSecret", user.clientSecret, {
            httpOnly: true,
            sameSite: 'lax',
        });

        return res.status(200).json({ user: user });
    }

    return res.status(200).json({ user: null });
}