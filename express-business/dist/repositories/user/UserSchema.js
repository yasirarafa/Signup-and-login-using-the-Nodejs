"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VersionableSchema_1 = require("../versionable/VersionableSchema");
class UserSchema extends VersionableSchema_1.default {
    constructor(option) {
        const userSchema = {
            _id: String,
            email: { type: String, unique: true },
            name: String,
            password: String,
            phoneNumber: Number,
        };
        super(userSchema, option);
    }
}
exports.default = UserSchema;
//# sourceMappingURL=UserSchema.js.map