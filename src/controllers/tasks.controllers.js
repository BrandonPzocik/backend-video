import { connection } from "../database/connection.js";

//GET /tasks
export const getTasksCtrl = async (req, res) => {
  try {
    const [resultados] = await connection.query("SELECT * FROM tasks");
    res.json(resultados);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error con la base de datos",
    });
  }
};

//POST /tasks
export const createTasksCtrl = async (req, res) => {
  const { title, description, isComplete } = req.body;
  try {
    const [result] = await connection.execute(
      "INSERT INTO tasks (title, description, isComplete) values (?, ?, ?)",
      [title, description, isComplete]
    );

    const [tasksFind] = await connection.execute(
      "SELECT * FROM tasks WHERE id = ?",
      [result.insertId]
    );

    console.log(result);
    res.status(201).json(tasksFind[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error con la base de datos",
    });
  }
};

//GET TASKS ID /tasks/:id
export const findTaskByIdCtrl = async (req, res) => {
  const tasksId = +req.params.id;

  try {
    const [findTask] = await connection.execute(
      "SELECT * FROM tasks WHERE id = ?",
      [tasksId]
    );

    if (findTask.length < 1) {
      return res.status(400).json({
        msg: "Tarea no encontrada",
      });
    }

    res.status(200).json(findTask[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error con la base de datos",
    });
  }
};

//PATCH TASK ID /tasks/:id
export const updateTasksCrtl = async (req, res) => {
  const tasksId = +req.params.id;
  const { title, description, isComplete } = req.body;
  try {
    const [result] = await connection.execute(
      "UPDATE tasks SET title=?, description=?, isComplete=? WHERE id = ?",
      [title, description, isComplete, tasksId]
    );

    if (result.affectedRows == 0) {
      return res.status(404).json({
        msg: "tarea no encontrada para modificar",
      });
    }

    const [findTasks] = await connection.execute(
      "SELECT * FROM tasks WHERE id = ?",
      [tasksId]
    );

    res.status(200).json(findTasks[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error con la base de datos",
    });
  }
};

//DELETE TASKS ID /tasks/:id
export const deleteTasksCrtl = async (req, res) => {
  const tasksId = +req.params.id;
  try {
    const [result] = await connection.execute(
      "DELETE FROM tasks WHERE id = ?",
      [tasksId]
    );
    if (result.affectedRows == 0) {
      return res.status(404).json({
        msg: "Tarea no encontrada",
      });
    }

    res.status(200).json({
      msg: "Tarea elimanda con exito",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error con la base de datos",
    });
  }
};
