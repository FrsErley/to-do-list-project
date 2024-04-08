import "express-async-errors";
import express, { Request, Response, NextFunction } from "express";
import userRoutes from "./users/user.routes";
import taskRoutes from "./tasks/task.routes";
import authRoutes from "./sessions/auth.routes";
import { AppError } from "./utils/erro";
import { verifyToken } from "./middleware/auth";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use(verifyToken);
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);

app.use((err: Error, _req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }
  if (process.env.NODE_ENV !== "production") {
    console.error(err);
  }

  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

export default app;
