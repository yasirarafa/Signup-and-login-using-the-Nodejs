"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class Database {
    static open(mongoUrl) {
        return new Promise((resolve, reject) => {
            mongoose
                .connect(mongoUrl, { useNewUrlParser: true })
                .then((db) => {
                console.log('successfully connected ');
                resolve();
            })
                .catch((err) => {
                console.log(err);
                reject(err);
            });
        });
    }
    static disconnect() {
        mongoose.disconnect();
        console.log('Disconnected from database');
    }
}
exports.default = Database;
//# sourceMappingURL=Database.js.map