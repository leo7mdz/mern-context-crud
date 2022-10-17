import dotenv from "dotenv";
import connectDB from "./config/db.js";
import express from "express";
import tasksRouter from "./routes/tasks-route.js";
import cors from "cors";
import fileUpload from "express-fileupload";

dotenv.config();

const expressApp = express();
expressApp.use(cors());

expressApp.use(express.json());
expressApp.use(express.text());
expressApp.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./upload",
  })
);

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
