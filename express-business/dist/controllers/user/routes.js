"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const validations_1 = require("./validations");
const tokenRoute_1 = require("../../libs/routes/tokenRoute");
exports.userRouter = express_1.Router();
const validator = require("express-joi-validation").createValidator();
const userController = controller_1.default.getInstance();
exports.userRouter
    .post("/signup", validator.body(validations_1.userValidation), tokenRoute_1.default)
    .post("/login", validator.body(validations_1.loginUserValiation), userController.loginUser)
    .get("/gerUser", userController.getUser);
//# sourceMappingURL=routes.js.map