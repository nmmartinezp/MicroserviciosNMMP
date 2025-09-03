import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import methodOverride from "method-override";
import config from "./config.js";
import routes from "./routes.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("port", config.app.port);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

app.use("/", routes);

export default app;
