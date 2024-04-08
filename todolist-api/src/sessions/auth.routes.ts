import express from "express";
export const router = express.Router();
import authController from "./auth.controller";
import userController from "../users/user.controller";

router.post("/sign-in", authController.signIn);
router.post("/sign-up", userController.create);

export default router;
