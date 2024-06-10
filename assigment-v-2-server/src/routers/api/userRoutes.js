import express from "express";
import * as userController from "../../controllers/userController.js";

const Router = express.Router();

Router.get(
    "/v1/user/membership",
    userController.getUerWithLevelRole("MEMBERSHIP")
);

Router.get("/v1/user/memberlist", userController.getMemberWithId);

export default Router;

// Route để lấy user theo ID
// router.get('/v1/user/:id', userController.getUserById);

// Route để lấy tất cả user
// router.get('/v1/users', userController.getAllUsers);

// Route để lấy tất cả user và sắp xếp theo email
// router.get('/v1/users/sorted', userController.getUsersSortedByEmail);

// GET /v1/user/sort?field=name&order=asc
// GET /v1/user/sort?field=gender&order=desc
