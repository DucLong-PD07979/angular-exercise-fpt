import { slugify } from "../util/format.js";

const createTask = async (req, res, next) => {
    try {
        const { name, ...taskRest } = req.body;
        const slug = slugify(name);
        const task = { name, slug, ...taskRest };
        req.task = task;
        next();
    } catch (error) {
        console.log(error);
    }
};

export { createTask };
