import express from "express";
import taskController from "./task.controller";
export const router = express.Router();

router.post("/", taskController.create);
router.get("/", taskController.getAll);

router.get("/:taskId", taskController.getTask);
router.put("/:taskId", taskController.update);
router.delete("/:taskId", taskController.delete);

export default router;
