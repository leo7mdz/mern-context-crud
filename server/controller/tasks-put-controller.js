import TasksModel from "../schemas/tasks-schemas.js";

const putTasksController = async (req, res) => {
  const { title, description } = req.body;
  const { id } = req.params;
  console.log(title, description);
  const newTask = await TasksModel.findById(id).exec();

  newTask.title = title;
  newTask.description = description;

  await newTask.save();
  res.send(newTask);
};

export default putTasksController;
