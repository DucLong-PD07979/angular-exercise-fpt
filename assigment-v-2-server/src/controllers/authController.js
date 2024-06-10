import UserModel from "../models/usersModel.js";
import {
    checkEmailIsAlreadyExists,
    checkPasswrodMatch,
    generateAccessToken,
    hashPassword,
} from "../services/authServices.js";

const authRegister = async (req, res) => {
    try {
        const { name, email, password, passwordComfirm } = req.body;
        const userData = await UserModel.find();
        const emailIsExist = checkEmailIsAlreadyExists(email, userData);
        if (emailIsExist) {
            return res.status(400).json({
                success: false,
                message:
                    "Email đã tồn tại, mời bạn đăng ký lại or đăng nhập bằng email",
            });
        }

        if (password !== passwordComfirm) {
            return res.status(400).json({
                success: false,
                message: "Mật khẩu xác thực không đúng",
            });
        }

        const passwordProtect = await hashPassword(password);
        const newUser = new UserModel({
            name,
            email,
            password: passwordProtect,
        });
        const savedUser = await newUser.save();
        console.log("User saved successfully:", savedUser);
        return res.status(200).json({
            success: true,
            // chuyển hướng sang client login
        });
    } catch (error) {
        console.log(error);
    }
};

const authLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userData = await UserModel.findOne({ email });
        const isPasswordMatch = await checkPasswrodMatch(password, userData);
        if (!isPasswordMatch) {
            return res.status(400).json({
                success: false,
                message: "mật khẩu của bạn không khớp mời bạn nhập lại",
            });
        }
        const accessToken = generateAccessToken(userData);
        return res.status(200).json({
            success: true,
            accessToken,
        });
    } catch (error) {
        console.log(error);
    }
};

export { authRegister, authLogin };
