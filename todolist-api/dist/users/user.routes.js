"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("./user.controller"));
exports.router = express_1.default.Router();
exports.router.post("/", user_controller_1.default.create);
exports.router.get("/", user_controller_1.default.getAll);
exports.router.get("/:userId", user_controller_1.default.getUser);
exports.router.put("/:userId", user_controller_1.default.update);
exports.router.delete("/:userId", user_controller_1.default.delete);
exports.default = exports.router;
