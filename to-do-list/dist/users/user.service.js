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
exports.deleteUser = exports.updateUser = exports.getUser = exports.getUsers = exports.createUser = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createUser = (body) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(body, "aquiiiiiiiiiiiiiiii 2");
    const user = yield prisma.user.create({
        data: body,
    });
    return user;
});
exports.createUser = createUser;
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma.user.findMany();
    return user;
});
exports.getUsers = getUsers;
const getUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma.user.findUnique({
        where: { id },
        include: {
            tasks: true,
        },
    });
    return user;
});
exports.getUser = getUser;
const updateUser = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    const user = prisma.user.update({
        where: {
            id: id,
        },
        data: body,
    });
    return user;
});
exports.updateUser = updateUser;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma.user.delete({
        where: { id },
    });
    return user;
});
exports.deleteUser = deleteUser;
