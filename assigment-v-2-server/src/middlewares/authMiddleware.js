import { getVerifyToken } from "../services/authServices.js";

const verifyToKen = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(400).send("Access denied: No token provided");
        }

        const decoded = await getVerifyToken(token, "TOKEN_KEY");
        req.user = decoded.userData;
        next();
    } catch (error) {
        console.log(error);
    }
};

const checkAuthenticated = (req, res, next) => {
    // req.isAuthenticated() là req có sản của passportjs
    if (req.isAuthenticated()) {
        console.log("xác thực thành công!");
        return next();
    }
    console.log("trang web vẫn chưa xác thực !");
    res.redirect("/v1/auth/login");
};

const accessLevelAuthor = (permission) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(400).json({
                message: "Bạn cần đăng nhập để truy câp!",
            });
        }

        if (!permission.includes(req.user.role)) {
            return res.status(400).json({
                message: "Bạn không được cấp truyền truy cập!",
            });
        }
        next();
    };
};

export { verifyToKen, accessLevelAuthor };
