"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const task_service_1 = require("./task.service");
class TaskController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body, "aquiiiiiiiiii");
                const { body } = req;
                const newTask = yield (0, task_service_1.createTask)(body);
                res.status(200).json({ newTask });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: "Erro ao criar uma atividade" });
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tasks = yield (0, task_service_1.getTasks)();
                res.json(tasks);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: "Erro ao buscar as atividades" });
            }
        });
    }
    getTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { taskId } = req.params;
                const tasks = yield (0, task_service_1.getTask)(Number(taskId));
                res.json(tasks);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: "Erro ao buscar uma atividade" });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { taskId } = req.params;
                const body = req.body;
                const tasks = yield (0, task_service_1.updateTask)(Number(taskId), body);
                res.json(tasks);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: "Erro ao atualizar uma atividade" });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { taskId } = req.params;
                const tasks = yield (0, task_service_1.deleteTask)(Number(taskId));
                res.json(tasks);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: "Erro ao excluir uma atividade" });
            }
        });
    }
}
exports.default = new TaskController();
