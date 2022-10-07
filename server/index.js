import dotenv from "dotenv";
import connectDB from "./config/db.js";
import express from "express";
import tasksRouter from "./routes/tasks-route.js";

dotenv.config();

const expressApp = express();

expressApp.use(express.json());
expressApp.use(express.text());

expressApp.use("/tasks", tasksRouter);

const bootstrap = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);

    expressApp.listen(process.env.PORT, () =>
      console.log("servidor levantado")
    );
  } catch (error) {
    console.log(error);
  }
};

bootstrap();
