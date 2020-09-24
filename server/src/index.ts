import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import * as routes from "./routes";
import { log } from "./tools/logger";

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes.register(app);

app.listen( port, () => {
   log( `server started at http://localhost:${ port }` );
});