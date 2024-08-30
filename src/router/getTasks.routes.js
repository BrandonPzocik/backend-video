import { Router } from "express";
import { getTasksCtrl } from "../controllers/getTasks.controllers.js";

const getTasks = Router();

getTasks.get("/", getTasksCtrl);
export { getTasks };
