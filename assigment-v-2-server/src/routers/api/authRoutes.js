import express from "express";
const Router = express.Router();
import * as authController from "../../controllers/authController.js";

Router.get("/v1/auth/register", (req, res) => {
    res.send("ok");
});

Router.post("/v1/auth/register", authController.authRegister);
Router.post("/v1/auth/login", authController.authLogin);

export default Router;
