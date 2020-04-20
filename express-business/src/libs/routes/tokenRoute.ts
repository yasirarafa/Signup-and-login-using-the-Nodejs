import * as bcrypt from "bcrypt";
import { NextFunction, Request, Response } from "express";
import SystemResponse from "../../libs/Response";
import UserRepository from "./../../repositories/user/UserRepository";

const userRepository = new UserRepository();
const saltRounds = 10;
export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const findUser = await userRepository.findOne({ email });
    if (findUser) {
      return next({
        error: "Internal Error",
        message: "User already exist",
        status: 400
      });
    } else {
      const salt = await bcrypt.genSalt(saltRounds);
      const pass = await bcrypt.hash(password, salt);
      req.body.password = pass;
      const createUser = await userRepository.create(req.body);
      res.send(SystemResponse.success("User created successfully", createUser));
      next();
    }
  } catch (error) {
    console.log("Inside the error", error);
  }
};
