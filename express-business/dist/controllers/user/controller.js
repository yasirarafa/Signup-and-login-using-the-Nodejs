"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Response_1 = require("../../libs/Response");
const UserRepository_1 = require("../../repositories/user/UserRepository");
class UserController {
    constructor() {
        this.userRepository = UserRepository_1.default.getInstance();
        this.loginUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { email } = req.body;
                const findUser = yield UserRepository_1.default.getInstance().findOne({ email });
                if (!findUser) {
                    throw Response_1.default.badRequestError("Please signup the user", new Error("Please signup the user"));
                }
                const validPassword = yield bcrypt.compare(req.body.password, findUser.password);
                if (!validPassword) {
                    return next({
                        error: "Unauthorize Access",
                        message: "Password don't match",
                        status: 400
                    });
                }
                res.send(Response_1.default.success("User login successfully", findUser));
            }
            catch (error) {
                next(error);
            }
        });
        this.getUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("Inside the getuser");
                var token = req.headers["x-access-token"];
                console.log(">>>>>Token", token);
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
            }
            catch (error) {
                console.log('Inside the error', error);
            }
        });
    }
    static getInstance() {
        if (!UserController.instance) {
            UserController.instance = new UserController();
        }
        return UserController.instance;
    }
}
exports.default = UserController;
//# sourceMappingURL=controller.js.map