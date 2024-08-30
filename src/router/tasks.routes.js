import { Router } from "express";
import {
  createTasksCtrl,
  deleteTasksCrtl,
  findTaskByIdCtrl,
  getTasksCtrl,
  updateTasksCrtl,
} from "../controllers/tasks.controllers.js";

const tasksRoutes = Router();

tasksRoutes.get("/", getTasksCtrl);
tasksRoutes.post("/", createTasksCtrl);

tasksRoutes.get("/:id", findTaskByIdCtrl);
tasksRoutes.patch("/:id", updateTasksCrtl); //el put si exite lo que quiero editar lo edita, sino lo crea
tasksRoutes.delete("/:id", deleteTasksCrtl);

export { tasksRoutes };
