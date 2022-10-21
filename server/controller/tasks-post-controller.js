import uploadImage from "../libs/cloudinary.js";
import TasksModel from "../schemas/tasks-schemas.js";
import fs from "fs-extra";

const postTasksController = async (req, res) => {
  try {
    const { title, description } = req.body;
    let image = null;

    if (req.files?.image) {
      const result = await uploadImage(req.files.image.tempFilePath);
      await fs.remove(req.files.image.tempFilePath);
      //console.log(result);
      image = {
        url: result.secure_url,
        public_id: result.public_id,
      };
    }

    const newTask = new TasksModel({
      title,
      description,
      image,
    });

    await newTask.save();
    res.send(newTask);
  } catch (error) {
    console.log(error.message);
  }
};

export default postTasksController;
