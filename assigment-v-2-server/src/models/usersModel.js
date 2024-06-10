import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ["ADMIN", "LEADER", "MEMBERSHIP"],
        default: "MEMBERSHIP",
    },
});

const UserModel = mongoose.model("Users", userSchema);
export default UserModel;
