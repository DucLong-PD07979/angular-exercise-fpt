import express from "express";
import * as services from "../../services/taskServices.js";
import * as controller from "../../controllers/taskController.js";
const Router = express.Router();

Router.post("/v1/task", services.createTask, controller.createTask);
Router.get("/v1/task/:projectId", controller.getTaskWithIdProject);

export default Router;
