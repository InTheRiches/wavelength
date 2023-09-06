const crypto = require('crypto');

export function genuuid() {
    let uuid = "", i, random;
    for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;

        if (i === 8 || i === 12 || i === 16 || i === 20)
            uuid += "-";

        uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
    }
    return uuid;
}

// Generate a random client secret
export function generateClientSecret () {
    const length = 32; // Length of the secret in bytes
    return crypto.randomBytes(length).toString('hex');
};