import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import { TOKEN_KEY, REFRESH_TOKEN_KEY } from "~/config/environment";

const blackListTokens = [];
const ROLES = ["ADMIN", "STUDEN", "TEACHER"];

const checkEmailIsAlreadyExists = (email, userData) => {
    let check = false;
    if (!email.trim()) {
        return check;
    }

    const findEmailUser = userData.find((user) => {
        return user.email === email;
    });

    if (findEmailUser) {
        check = true;
        return check;
    }
};

const checkIsNameAlreadExists = (name, userData) => {
    let check = false;
    if (!name.trim()) {
        return check;
    }

    const findNameUser = userData.find((user) => {
        return user.name === name;
    });

    if (findNameUser) {
        check = true;
        return check;
    }
};

const hashPassword = async (password) => {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
};

const checkPasswrodMatch = async (pass, user) => {
    let isOk = false;
    const match = await bcrypt
        .compare(pass, user.password)
        .then((result) => (isOk = result));
    if (match) {
        isOk = true;
    }
    return isOk;
};

const generateAccessToken = (data) => {
    const tokenLifeTime = Math.floor(Date.now() / 1000) + 60 * 10;
    const token = jwt.sign(
        {
            exp: tokenLifeTime,
            userData: data,
        },
        "TOKEN_KEY"
    );
    return token;
};

const generateRrefreshToken = (data) => {
    const TWENTY_DAYS_IN_SECONDS = 20 * 24 * 60 * 60;
    const expirationUnixTimestamp = Math.floor(
        (new Date().getTime() + TWENTY_DAYS_IN_SECONDS * 1000) / 1000
    );

    const tokenRefresh = jwt.sign(
        {
            exp: expirationUnixTimestamp,
            userData: data,
        },
        "REFRESH_TOKEN_KEY"
    );
    return tokenRefresh;
};

const getVerifyToken = (token, keytoken) => {
    return new Promise((res, rej) => {
        jwt.verify(token, keytoken, function (err, decoded) {
            if (err) {
                rej(err);
            } else {
                res(decoded);
            }
        });
    });
};

const addTokenToBlackList = (token) => {
    blackListTokens.push(token);
    return blackListTokens;
};

const checkTokenAlreadyExistInBlackList = (token) => {
    return blackListTokens.includes(token);
};

export {
    checkEmailIsAlreadyExists,
    checkIsNameAlreadExists,
    hashPassword,
    generateAccessToken,
    generateRrefreshToken,
    checkPasswrodMatch,
    getVerifyToken,
    blackListTokens,
    ROLES,
};
