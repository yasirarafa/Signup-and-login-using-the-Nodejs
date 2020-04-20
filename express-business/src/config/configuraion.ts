import { config } from 'dotenv';
import { IConfig } from './IConfig';

config();
const configuration: IConfig = Object.freeze({
  mongo_url: process.env.MONGO_URL,
  node_env: process.env.NODE_ENV,
  port: process.env.PORT,
  key: process.env.KEY
});
export default configuration;
