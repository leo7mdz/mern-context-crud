import uploadImage from "../libs/cloudinary.js";
import TasksModel from "../schemas/tasks-schemas.js";
import fs from "fs-extra";

const postTasksController = async (req, res) => {
  const { title, description } = req.body;
  let image = null;

  if (req.files?.image) {
    const result = await uploadImage(req.files.image.tempFilePath);
    //console.log(result);
    image = {
      public_id: result.public_id,
      url: result.url,
    };
    await fs.remove(req.files.image.tempFilePath);
  }

  const newTask = new TasksModel({
    title,
    description,
    image,
  });

  await newTask.save();
  res.send(newTask);
};

export default postTasksController;
