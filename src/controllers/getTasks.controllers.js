import { connection } from "../database/connection.js";

export const getTasksCtrl = async (req, res) => {
  const [resultados] = await connection.query("SELECT * FROM tasks");
  res.json(resultados);
};
