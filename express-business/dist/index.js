"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configuraion_1 = require("./config/configuraion");
const Server_1 = require("./Server");
const server = new Server_1.default(configuraion_1.default);
server.bootstrap();
server.listen();
//# sourceMappingURL=index.js.map