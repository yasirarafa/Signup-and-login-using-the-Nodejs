import { Router } from "express";
import UserController from "./controller";
import { userValidation, loginUserValiation } from "./validations";
import tokenRoutes from "../../libs/routes/tokenRoute";
export const userRouter: Router = Router();
const validator = require("express-joi-validation").createValidator();
const userController = UserController.getInstance();

userRouter
  .post("/signup", validator.body(userValidation), tokenRoutes)
  .post("/login", validator.body(loginUserValiation), userController.loginUser)
  .get("/gerUser", userController.getUser);
