import configuration from "./config/configuraion";
import Server from "./Server";
const server = new Server(configuration);
server.bootstrap();
server.listen();