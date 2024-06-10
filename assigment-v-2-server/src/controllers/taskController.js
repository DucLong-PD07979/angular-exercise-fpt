import TaskMOdel from "../models/taskModel.js";

const createTask = async (req, res) => {
    try {
        const task = req.task;
        const newTask = new TaskMOdel(task);
        const saveTask = await newTask.save();
        return res.status(200).json({
            success: true,
            message: "thêm task thành công",
            saveTask,
        });
    } catch (error) {
        console.log(error);
    }
};

const getTaskWithIdProject = async (req, res) => {
    try {
        const projectId = req.params.projectId;
        console.log("project id:" + projectId);
        if (projectId) {
            const taskData = await TaskMOdel.find({ projectId: projectId });
            if (!taskData) {
                return res.status(400).json({
                    success: false,
                    message: "không tìm thấy task",
                });
            }
            return res.status(200).json({
                success: true,
                taskData,
            });
        }
    } catch (error) {
        console.log(error);
    }
};

export { createTask, getTaskWithIdProject };
