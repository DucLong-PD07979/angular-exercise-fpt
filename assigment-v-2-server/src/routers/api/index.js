import express from "express";
import authRouter from "./authRoutes.js";
import projectRouter from "./projectRoutes.js";
import taskRouter from "./taskRoutes.js";
import userRouter from "./userRoutes.js";

const Router = express.Router();
Router.use("/api", authRouter);
Router.use("/api", projectRouter);
Router.use("/api", taskRouter);
Router.use("/api", userRouter);

export default Router;
