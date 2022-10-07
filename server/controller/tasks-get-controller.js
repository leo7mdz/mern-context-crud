import TasksModel from "../schemas/tasks-schemas.js";

const getTasksController = async (req, res) => {
  const tasks = await TasksModel.find();
  res.send(tasks);
};

export default getTasksController;
