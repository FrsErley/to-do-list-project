"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const task_controller_1 = __importDefault(require("./task.controller"));
exports.router = express_1.default.Router();
exports.router.post("/", task_controller_1.default.create);
exports.router.get("/", task_controller_1.default.getAll);
exports.router.get("/:taskId", task_controller_1.default.getTask);
exports.router.put("/:taskId", task_controller_1.default.update);
exports.router.delete("/:taskId", task_controller_1.default.delete);
exports.default = exports.router;
