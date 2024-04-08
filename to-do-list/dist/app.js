"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
const user_routes_1 = __importDefault(require("./users/user.routes"));
const task_routes_1 = __importDefault(require("./tasks/task.routes"));
app.use(express_1.default.json());
app.use("/api/users", user_routes_1.default);
app.use("/api/tasks", task_routes_1.default);
app.listen(port, () => {
  console.log(`Servidor Express está rodando em http://localhost:${port}`);
});
app.get("/", (req, res) => {
  res.send("Olá, mundo!");
});
