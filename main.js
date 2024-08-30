import express from "express";
import { PORT } from "./setting/environments.js";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { getTasks } from "./src/router/getTasks.routes.js";

const app = express();

//middlewares (se ejecutan en el medio entre que el cliente hace una solictud al servidor)
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/tasks", getTasks);

app.listen(PORT, () => {
  console.log("server on port 4000");
});
