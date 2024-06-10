import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    owner: {
        type: mongoose.Types.ObjectId,
        require: true,
    },
    status: {
        type: String,
        required: true,
        enum: ["DO_NOT", "PROGRESS", "DONE"],
        default: "DO_NOT",
    },
    description: {
        type: String,
        required: true,
    },
    totalCosts: {
        type: Number,
        require: true,
    },
    totalTask: {
        type: Number,
        require: true,
    },
    slug: {
        type: String,
        require: true,
    },
    memberList: {
        type: [mongoose.Types.ObjectId],
        require: true,
    },
    startDate: {
        type: Date,
        default: Date.now,
    },
    endDate: {
        type: Date,
        default: Date.now,
    },
    progress_percentage: {
        type: Number,
        default: 0,
    },
    completed_tasks: {
        type: Number,
        default: 0,
    },
});
const ProjectsModel = mongoose.model("Projects", projectSchema);
export default ProjectsModel;
