import TasksModel from "../schemas/tasks-schemas.js";

const getTaskController = async (req, res) => {
  const { id } = req.params;

  const task = await TasksModel.findById(id).exec();

  if (!task) {
    return res.status(401);
  }

  res.send(task);
};

export default getTaskController;
