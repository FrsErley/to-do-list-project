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
exports.deleteTask = exports.updateTask = exports.getTask = exports.getTasks = exports.createTask = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createTask = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield prisma.task.create({
        data: body,
    });
    return task;
});
exports.createTask = createTask;
const getTasks = () => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield prisma.task.findMany();
    return task;
});
exports.getTasks = getTasks;
const getTask = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield prisma.task.findUnique({
        where: { id },
    });
    return task;
});
exports.getTask = getTask;
const updateTask = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    const task = prisma.task.update({
        where: {
            id: id,
        },
        data: body,
    });
    return task;
});
exports.updateTask = updateTask;
const deleteTask = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield prisma.task.delete({
        where: { id },
    });
    return task;
});
exports.deleteTask = deleteTask;
