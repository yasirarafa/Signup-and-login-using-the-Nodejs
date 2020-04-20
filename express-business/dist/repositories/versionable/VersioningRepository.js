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
const mongoose = require("mongoose");
class VersioningRepository {
    constructor(model) {
        this.model = model;
    }
    static generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }
    create(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = VersioningRepository.generateObjectId();
            const model = new this.model(Object.assign(Object.assign({}, options), { _id: id, originalId: id }));
            return yield model.save();
        });
    }
    count(query) {
        const finalQuery = Object.assign({ deletedAt: null }, query);
        return this.model.countDocuments(finalQuery);
    }
    getAll(query, projection = {}, options = {}) {
        const finalQuery = Object.assign({ deletedAt: null }, query);
        return this.model.find(finalQuery, projection, options);
    }
    findOne(query) {
        const finalQuery = Object.assign({ deletedAt: null }, query);
        return this.model.findOne(finalQuery);
    }
    find(query = {}, projection = {}, options = {}) {
        const finalQuery = Object.assign({ deletedAt: null }, query);
        return this.model.find(finalQuery, projection, options);
    }
    insertMany(data) {
        return this.model.insertMany(data);
    }
    invalidate(id) {
        return this.model.update({ originalId: id, deletedAt: null }, { deletedAt: Date.now() });
    }
    update(data) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Looking for previous valid document');
            const prev = yield this.findOne({ originalId: data.originalId, deletedAt: null });
            console.log('Prev : ', prev);
            if (prev) {
                yield this.invalidate(data.originalId);
            }
            else {
                return null;
            }
            console.log('Data : ', data);
            const newData = Object.assign(JSON.parse(JSON.stringify(prev)), data);
            console.log('New Data : ', newData);
            newData._id = VersioningRepository.generateObjectId();
            delete newData.deletedAt;
            const model = new this.model(newData);
            return model.save();
        });
    }
}
exports.default = VersioningRepository;
//# sourceMappingURL=VersioningRepository.js.map