import { body } from "express-validator";

export const createTasksValidations = [
  body("title")
    .isString()
    .withMessage("El titulo debe ser un string")
    .notEmpty()
    .withMessage("EL título no puede estar vacia"),
  body("description")
    .isString()
    .withMessage("Descripcion es un string")
    .notEmpty()
    .withMessage("la descripcion no puede estar vacia"),
  body("isComplete")
    .isBoolean()
    .withMessage(" isComplete es un boolean ")
    .notEmpty()
    .withMessage("si esta completo o no, no puede estar vacio"),
];

export const updateTasksValidations = [
  body("title")
    .optional()
    .isString()
    .withMessage("El titulo debe ser un string")
    .notEmpty()
    .withMessage("EL título no puede estar vacia"),
  body("description")
    .optional()
    .isString()
    .withMessage("Descripcion es un string")
    .notEmpty()
    .withMessage("la descripcion no puede estar vacia"),
  body("isComplete")
    .optional()
    .isBoolean()
    .withMessage(" isComplete es un boolean ")
    .notEmpty()
    .withMessage("si esta completo o no, no puede estar vacio"),
];
