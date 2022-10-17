import mongoose from "mongoose";
const { Schema, model } = mongoose;

const tasksSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    public_id: String,
    url: String,
  },
});

const TasksModel = model("tasks", tasksSchema);

export default TasksModel;
