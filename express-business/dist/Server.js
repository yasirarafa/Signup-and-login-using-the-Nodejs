"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const Database_1 = require("./libs/Database");
const router_1 = require("./router");
const routes_1 = require("./libs/routes");
class Server {
    constructor(config) {
        this.config = config;
        this.app = express();
    }
    listen() {
        console.log('Inside the listen')
        const port = this.config.port;
        const mongoUrl = this.config.mongo_url;
        this.app.listen(port, () => {
            console.log(`App  is running on port ${port}`);
            Database_1.default.open(mongoUrl);
        });
        return this;
    }
    bootstrap() {
        console.log("In the bootstrap method");
        this.initBodyParser();
        this.setupRoutes();
        return this;
    }
    setupRoutes() {
        const { app } = this;
        app.use("/health-check", (req, res) => {
            res.send("I am good");
            console.log("inside the setup routes");
        });
        app.use("/api", router_1.router);
        app.use(routes_1.errorHandler);
    }
    initBodyParser() {
        const { app } = this;
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map