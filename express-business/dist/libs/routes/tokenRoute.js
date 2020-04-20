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
const Response_1 = require("../../libs/Response");
const UserRepository_1 = require("./../../repositories/user/UserRepository");
const userRepository = new UserRepository_1.default();
const saltRounds = 10;
exports.default = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const findUser = yield userRepository.findOne({ email });
        if (findUser) {
            return next({
                error: "Internal Error",
                message: "User already exist",
                status: 400
            });
        }
        else {
            const salt = yield bcrypt.genSalt(saltRounds);
            const pass = yield bcrypt.hash(password, salt);
            req.body.password = pass;
            const createUser = yield userRepository.create(req.body);
            res.send(Response_1.default.success("User created successfully", createUser));
            next();
        }
    }
    catch (error) {
        console.log("Inside the error", error);
    }
});
//# sourceMappingURL=tokenRoute.js.map