import express from "express";
import userController from "./user.controller";
export const router = express.Router();

router.get("/", userController.getAll);

router.get("/:userId", userController.getUser);
router.put("/:userId", userController.update);
router.delete("/:userId", userController.delete);

export default router;
