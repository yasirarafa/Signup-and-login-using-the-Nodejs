"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class VersionableSchema extends mongoose.Schema {
    constructor(options, collections) {
        const versionedOptions = Object.assign({
            createdAt: {
                default: Date.now,
                type: Date,
            },
            updatedAt: {
                default: Date.now,
                type: Date,
            },
            updatedBy: {
                type: String,
            },
            createdBy: {
                type: String,
            },
            deletedBy: {
                type: String,
                required: false,
            },
            deletedAt: {
                required: false,
                type: Date,
            },
            originalId: {
                required: false,
                type: String,
            }
        }, options);
        super(versionedOptions, collections);
    }
}
exports.default = VersionableSchema;
//# sourceMappingURL=VersionableSchema.js.map