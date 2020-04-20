"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("./controllers/user");
exports.router = express_1.Router();
exports.router.use('/user', user_1.default);
//# sourceMappingURL=router.js.map