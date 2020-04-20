"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
dotenv_1.config();
const configuration = Object.freeze({
    mongo_url: process.env.MONGO_URL,
    node_env: process.env.NODE_ENV,
    port: process.env.PORT,
    key: process.env.KEY
});
exports.default = configuration;
//# sourceMappingURL=configuraion.js.map