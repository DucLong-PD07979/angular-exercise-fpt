import ProjectsModel from "../models/projectsModel.js";
import mongoose from "mongoose";

const createProject = async (req, res) => {
    try {
        const project = req.project;
        const newProject = new ProjectsModel(project);
        const saveProject = await newProject.save();
        return res.status(200).json({
            success: true,
            message: "thêm project thành công",
            saveProject,
        });
    } catch (error) {
        console.log(error);
    }
};

const getAllProject = async (req, res) => {
    try {
        const projectsData = await ProjectsModel.find();
        return res.status(200).json({
            success: true,
            projectsData,
        });
    } catch (error) {
        console.log(error);
    }
};

const getAllProjectWithOwer = async (req, res) => {
    const userId = req.params.userId;
    try {
        const projectsData = await ProjectsModel.find({ owner: userId });
        if (!projectsData.length) {
            return res
                .status(404)
                .json({ error: "No projects found for this user" });
        }
        return res.status(200).json({
            success: true,
            projectsData,
        });
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const getProjectWithSlug = async (req, res) => {
    try {
        if (req.params.slug) {
            const slug = req.params.slug;
            const projectsData = await ProjectsModel.find({ slug: slug });
            if (!projectsData.length) {
                return res
                    .status(404)
                    .json({ error: "No projects found for this slug" });
            }
            return res.status(200).json({
                success: true,
                projectsData,
            });
        }
    } catch (error) {
        console.log(error);
    }
};

const removeProject = async (req, res) => {
    try {
        const projectId = req.params.id;
        const project = await ProjectsModel.findByIdAndDelete({
            _id: projectId,
        });
        if (!project) {
            return res.status(404).json({ error: "Project not found" });
        }

        res.status(200).json({
            success: true,
            message: "Project deleted successfully",
        });
    } catch (error) {
        console.log(error);
    }
};

const getAllProjectWithIdMember = async (req, res) => {
    try {
        const memberId = req.params.id;
        const memberObjectId = new mongoose.Types.ObjectId(memberId);
        const projects = await ProjectsModel.find({
            memberList: { $in: memberObjectId },
        });

        if (!projects) {
            return res.status(404).json({ error: "Project not found" });
        }
        return res.status(200).json({ succes: true, projects: projects });
    } catch (error) {
        console.log(error);
    }
};
export {
    createProject,
    getAllProject,
    getAllProjectWithOwer,
    getProjectWithSlug,
    removeProject,
    getAllProjectWithIdMember,
};
