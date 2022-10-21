import { removeImage } from "../libs/cloudinary.js";
import TasksModel from "../schemas/tasks-schemas.js";

const deleteTasksController = async (req, res) => {
  const { id } = req.params;

  const newTask = await TasksModel.findById(id).exec();

  if (newTask && newTask.image.public_id) {
    await removeImage(newTask.image.public_id);
  }

  await newTask.remove();
  res.send(newTask);
};

export default deleteTasksController;
