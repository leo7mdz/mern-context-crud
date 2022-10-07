import TasksModel from "../schemas/tasks-schemas.js";

const deleteTasksController = async (req, res) => {
  const { id } = req.params;

  const newTask = await TasksModel.findById(id).exec();

  await newTask.remove();
  res.send(newTask);
};

export default deleteTasksController;
