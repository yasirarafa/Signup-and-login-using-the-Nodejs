"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const UserSchema_1 = require("./UserSchema");
exports.userSchema = new UserSchema_1.default({
    collection: 'Users',
});
exports.userModel = mongoose.model('Users', exports.userSchema, 'Users', true);
//# sourceMappingURL=UserModel.js.map