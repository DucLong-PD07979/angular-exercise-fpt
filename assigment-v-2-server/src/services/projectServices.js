import ProjectsModel from "../models/projectsModel.js";
import { slugify } from "../util/format.js";

const createProject = async (req, res, next) => {
    try {
        const { name, ...projectRest } = req.body;
        const slug = slugify(name);
        const project = { name, slug, ...projectRest };
        req.project = project;
        next();
    } catch (error) {
        console.log(error);
    }
};

const getAllProjectWithOwer = async (req, res) => {
    const userId = req.params.userId;
    try {
        const projects = await ProjectsModel.find({ owner: userId });
        if (!projects.length) {
            return res
                .status(404)
                .json({ error: "No projects found for this user" });
        }
        req.projects = projects;
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export { createProject, getAllProjectWithOwer };
