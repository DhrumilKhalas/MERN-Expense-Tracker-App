import express from "express";
const authRouter = express.Router();
import authController from "../controllers/authController.js";

authRouter.post("/register", authController.registerUser);
authRouter.post("/login", authController.loginUser);

export default authRouter;
