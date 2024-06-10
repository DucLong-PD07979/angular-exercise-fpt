import express from "express";
import * as services from "../../services/projectServices.js";
import * as controller from "../../controllers/projectController.js";
import { verifyToKen } from "../../middlewares/authMiddleware.js";

const Router = express.Router();

Router.get("/v1/projects", controller.getAllProject);
Router.get("/v1/projects/user/:userId", controller.getAllProjectWithOwer);
Router.get("/v1/projects/slug/:slug", controller.getProjectWithSlug);
Router.get("/v1/projects/member/:id", controller.getAllProjectWithIdMember);

Router.post("/v1/projects", services.createProject, controller.createProject);
Router.delete("/v1/projects/:id", controller.removeProject);

export default Router;
