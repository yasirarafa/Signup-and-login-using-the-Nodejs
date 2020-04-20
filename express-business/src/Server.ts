import * as bodyParser from "body-parser";
import * as express from "express";
import Database from "./libs/Database";
import { IConfig } from "src/config/IConfig";
import { router } from "./router";
import { errorHandler } from "./libs/routes";

export default class Server {
  private app: express.Express;
  constructor(private config: IConfig) {
    this.app = express();
  }

  public listen() {
    const port = this.config.port;
    const mongoUrl = this.config.mongo_url;
    this.app.listen(port, () => {
      console.log(`App  is running on port ${port}`);
      Database.open(mongoUrl);
    });
    return this;
  }

  public bootstrap() {
    console.log("In the bootstrap method");
    this.initBodyParser();
    this.setupRoutes();
    return this;
  }

  public setupRoutes() {
    const { app } = this;
    app.use("/health-check", (req, res) => {
      res.send("I am good");
      console.log("inside the setup routes");
    });
    app.use("/api", router);
    app.use(errorHandler);
  }

  private initBodyParser() {
    const { app } = this;
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
  }
}
