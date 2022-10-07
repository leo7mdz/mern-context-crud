import TasksModel from "../schemas/tasks-schemas.js";

const postTasksController = async (req, res) => {
  const { title, description } = req.body;
  const newTask = new TasksModel({
    title,
    description,
  });

  await newTask.save();
  res.send(newTask);
};

export default postTasksController;
