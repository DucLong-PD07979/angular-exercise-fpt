import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        require: true,
        enum: ["IN-PROGRESS", "DONE", "DO-NOT"],
        default: "DO-NOT",
    },
    due_date: {
        type: Date,
        require: true,
    },
    employerId: {
        type: mongoose.Types.ObjectId,
    },
    slug: {
        type: String,
        required: true,
    },
    projectId: {
        type: mongoose.Types.ObjectId,
        require: true,
    },
});

const TaskMOdel = mongoose.model("Task", taskSchema);
export default TaskMOdel;
