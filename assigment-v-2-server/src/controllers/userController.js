import UserModel from "../models/usersModel.js";

const getUerWithLevelRole = (roleParam) => {
    return async (req, res) => {
        const userData = await UserModel.find({ role: roleParam });
        if (!userData.length) {
            return res
                .status(200)
                .json({ success: false, messages: "không tìm thấy user!" });
        }

        return res.status(200).json({ success: true, userData });
    };
};

const getMemberWithId = async (req, res) => {
    try {
        const memberList = req.query.memberList.split(",");
        console.log(memberList);
        if (memberList) {
            const userData = await UserModel.find({ _id: { $in: memberList } });
            if (!userData.length) {
                return res
                    .status(200)
                    .json({ success: false, messages: "không tìm thấy user!" });
            }
            return res.status(200).json({ success: true, userData });
        }
    } catch (error) {
        console.log(error);
    }
};

export { getUerWithLevelRole, getMemberWithId };
