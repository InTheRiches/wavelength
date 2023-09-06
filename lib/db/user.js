import {generateClientSecret} from "@/lib/db/genuuid";

const argon2 = require('argon2');
import {ObjectId} from 'mongodb';
import normalizeEmail from 'validator/lib/normalizeEmail';
import {genToken} from "@/pages/api/user";

export async function findUserWithEmailAndPassword(db, email, password) {
    email = normalizeEmail(email);
    const user = await db.collection('users').findOne({ email });

    if (!(user && (await argon2.verify(user.password, password)))) {
        return null;
    }

    return {...user, password: undefined, refreshToken: undefined, refreshTokenExp: undefined, accessTokenExp: undefined}; // filtered out password
}

export async function loginUserWithEmailAndPassword(db, email, password) {
    const user = await findUserWithEmailAndPassword(db, email, password);

    if (user === null) {
        return null;
    }

    const newRefreshToken = genToken();
    const newAccessToken = genToken();

    db.collection('users').updateOne({ email }, { $set: { refreshToken: newRefreshToken, refreshTokenExp: new Date(Date.now() + (1000 * 60 * 60 * 24 * 30)), accessToken: newAccessToken, accessTokenExp: new Date(Date.now() + (1000 * 60 * 30)) } });

    user.accessToken = newAccessToken;
    user.accessTokenExp = undefined;
    user.refreshTokenExp = undefined;
    user.password = undefined;
    user.clientSecret = undefined;

    return user;
}

export async function findUserById(db, userId) {
    return db
        .collection('users')
        .findOne({ _id: new ObjectId(userId) }, { projection: dbProjectionUsers() })
        .then((user) => {
            if (user) {
                user.refreshToken = undefined;
                user.refreshTokenExp = undefined;
                user.accessTokenExp = undefined;
                user.password = undefined;
                user.clientSecret = undefined;
            }

            return user || null;
        });
}

export async function findUserByEmail(db, email) {
    email = normalizeEmail(email);
    return db
        .collection('users')
        .findOne({ email }, { projection: dbProjectionUsers() })
        .then((user) => {
            if (user) {
                user.refreshToken = undefined;
                user.refreshTokenExp = undefined;
                user.accessTokenExp = undefined;
                user.password = undefined;
                user.clientSecret = undefined;
            }

            return user || null;
        });
}

export async function findUserByAccessToken(db, id, accessToken) {
    return db
        .collection('users')
        .findOne({ id, accessToken })
        .then((user) => {
            if (user && user.accessTokenExp < Date.now()) {
                console.log("access token expired")

                user.refreshToken = undefined;
                user.refreshTokenExp = undefined;
                user.accessTokenExp = undefined;
                user.password = undefined;
                user.clientSecret = undefined;

                return {...user, accessToken: undefined};
            }

            if (user) {
                user.refreshToken = undefined;
                user.refreshTokenExp = undefined;
                user.accessTokenExp = undefined;
                user.password = undefined;
                user.clientSecret = undefined;
            }

            return user || null;
        });
}

export async function findUserByRefreshToken(db, refreshToken, id, clientSecret) {
    return db
        .collection('users')
        .findOne({ refreshToken, id, clientSecret }, { projection: dbProjectionUsers() })
        .then((user) => {
            if (user && user.refreshTokenExp < Date.now()) {

                user.refreshToken = undefined;
                user.refreshTokenExp = undefined;
                user.accessTokenExp = undefined;
                user.password = undefined;
                user.clientSecret = undefined;

                return { ...user, refreshToken: "refresh_token" };
            }

            if (user && user.accessTokenExp < Date.now()) {
                const newToken = genToken();

                db.collection('users').updateOne({ refreshToken, id, clientSecret }, { $set: { accessToken: newToken, accessTokenExp: new Date(Date.now() + (1000 * 60 * 30)) } });

                user.refreshToken = undefined;
                user.refreshTokenExp = undefined;
                user.accessTokenExp = undefined;
                user.password = undefined;
                user.clientSecret = undefined;

                return { ...user, accessToken: genToken() };
            }

            user.refreshToken = undefined;
            user.refreshTokenExp = undefined;
            user.accessTokenExp = undefined;
            user.password = undefined;
            user.clientSecret = undefined;

            return user || null;
        });
}

export async function insertUser(db, { email, id, oldPassword, refreshToken, accessToken }) {
    const password = await argon2.hash(oldPassword);

    const user = {
        id,
        email,
        emailVerified: false,
        accessToken,
        clientSecret: generateClientSecret(),
    };
    const { insertedId } = await db
        .collection('users')
        .insertOne({ ...user, password, refreshToken, accessTokenExp: new Date(Date.now() + (1000 * 60 * 30)), refreshTokenExp: new Date(Date.now() + (1000 * 60 * 60 * 24 * 30)) });
    user._id = insertedId;
    return user;
}

export async function updateUserById(db, id, data) {
    return db
        .collection('users')
        .findOneAndUpdate(
            { id: id },
            { $set: data },
            { returnDocument: 'after', projection: { password: 0 } }
        )
        .then(({ value }) => value);
}

// export async function findUserForAuth(db, userId) {
//     return db
//         .collection('users')
//         .findOne({ _id: new ObjectId(userId) }, { projection: { password: 0 } })
//         .then((user) => user || null);
// }

// export async function updateUserById(db, id, data) {
//     return db
//         .collection('users')
//         .findOneAndUpdate(
//             { id: id },
//             { $set: data },
//             { returnDocument: 'after', projection: { password: 0 } }
//         )
//         .then(({ value }) => value);
// }

// export async function updateUserPasswordByOldPassword(
//     db,
//     id,
//     oldPassword,
//     newPassword
// ) {
//     const user = await db.collection('users').findOne(new ObjectId(id));
//     if (!user) return false;
//     const matched = await bcrypt.compare(oldPassword, user.password);
//     if (!matched) return false;
//     await db
//         .collection('users')
//         .updateOne({ _id: new ObjectId(id) }, { $set: { newPassword } });
//     return true;
// }
//
// export async function UNSAFE_updateUserPassword(db, id, newPassword) {
//     await db
//         .collection('users')
//         .updateOne({ _id: new ObjectId(id) }, { $set: { newPassword } });
// }
//
// export async function isCorrectPassword(db, id, email, password) {
//     const user = await db.collection('users').findOne(new ObjectId(id));
//
//     return await bcrypt.compare(password, user.password);
// }

export function dbProjectionUsers(prefix = '') {
    return {
        [`${prefix}password`]: 0,
        [`${prefix}email`]: 0,
        [`${prefix}emailVerified`]: 0,
    };
}