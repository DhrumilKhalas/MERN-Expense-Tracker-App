import express from "express";
import passport from "passport";
import userController from "../controllers/UserController.js";
const userRouter = express.Router();

userRouter.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  userController.authUser
);

export default userRouter;
