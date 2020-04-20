"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const UserModel_1 = require("./UserModel");
const VersioningRepository_1 = require("../versionable/VersioningRepository");
class UserRepository extends VersioningRepository_1.default {
    constructor() {
        super(UserModel_1.userModel);
    }
    static getInstance() {
        if (!UserRepository.instance) {
            UserRepository.instance = new UserRepository();
        }
        return UserRepository.instance;
    }
    static generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }
    count(query = {}) {
        return super.count(query);
    }
    findOne(query) {
        return super.findOne(query).lean();
    }
    find(query, projection, options) {
        return super.find(query, projection, options);
    }
    insertMany(data) {
        return super.insertMany(data);
    }
    create(data) {
        return super.create(data);
    }
    delete(id) {
        return super.invalidate(id);
    }
    update(data) {
        return super.update(data);
    }
}
exports.default = UserRepository;
//# sourceMappingURL=UserRepository.js.map