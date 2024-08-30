import { Router } from "express";
import {
  createTasksCtrl,
  deleteTasksCrtl,
  findTaskByIdCtrl,
  getTasksCtrl,
  updateTasksCrtl,
} from "../controllers/tasks.controllers.js";
import {
  createTasksValidations,
  updateTasksValidations,
} from "../validations/tasks.validations.js";
import { applyValidations } from "../middlewares/validations.middlewares.js";

const tasksRoutes = Router();
//GET
tasksRoutes.get("/", getTasksCtrl);

//POST
tasksRoutes.post(
  "/",
  createTasksValidations,
  applyValidations,
  createTasksCtrl
);

//GET BY ID
tasksRoutes.get("/:id", findTaskByIdCtrl);

//PATCH
tasksRoutes.patch(
  "/:id",
  updateTasksValidations,
  applyValidations,
  updateTasksCrtl
); //el PUT si exite lo que quiero editar lo edita, sino lo crea, en cambio el PATCH solo edita

//DELETE
tasksRoutes.delete("/:id", deleteTasksCrtl);

export { tasksRoutes };
