import { Request, Response, NextFunction } from "express";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import SystemResponse from "../../libs/Response";

import UserRepository from "../../repositories/user/UserRepository";
class UserController {
  public static getInstance() {
    if (!UserController.instance) {
      UserController.instance = new UserController();
    }
    return UserController.instance;
  }
  private constructor() {}

  private static instance: UserController;
  private userRepository: UserRepository = UserRepository.getInstance();

  public loginUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { email } = req.body;
      const findUser = await UserRepository.getInstance().findOne({ email });
      if (!findUser) {
        throw SystemResponse.badRequestError(
          "Please signup the user",
          new Error("Please signup the user")
        );
      }
      const validPassword = await bcrypt.compare(
        req.body.password,
        findUser.password
      );
      if (!validPassword) {
        return next({
          error: "Unauthorize Access",
          message: "Password don't match",
          status: 400
        });
      }
      res.send(SystemResponse.success("User login successfully", findUser));
    } catch (error) {
      next(error);
    }
  };
  public getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("Inside the getuser");
      var token = req.headers["x-access-token"];
      console.log(">>>>>Token",token);
      if (!token) {
        return next({
          error: "Internal Error",
          message: "Please provide the token",
          status: 400
        });
      }
      const verifyToken = jwt.verifyToken(token);
      console.log('>>>>>>Inside the verify token', verifyToken);
      res.send("I am good");
    } catch (error) {
      console.log('Inside the error', error);
    }
  };
}
export default UserController;
