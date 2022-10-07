import { Router } from "express";
import getTaskController from "../controller/task-get-controller.js";
import deleteTasksController from "../controller/tasks-delete-controller.js";
import getTasksController from "../controller/tasks-get-controller.js";
import postTasksController from "../controller/tasks-post-controller.js";
import putTasksController from "../controller/tasks-put-controller.js";
import tasksPostValidate from "../dto/postDTOSchema.js";
import tasksPutValidate from "../dto/putDTOSchema.js";

const tasksRouter = Router();

tasksRouter.get("/", getTasksController);
tasksRouter.get("/:id", getTaskController);

tasksRouter.post("/", tasksPostValidate, postTasksController);

tasksRouter.put("/:id", tasksPutValidate, putTasksController);

tasksRouter.delete("/:id", deleteTasksController);

export default tasksRouter;
