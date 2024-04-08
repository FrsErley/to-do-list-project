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
const user_service_1 = require("./user.service");
class UserController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body, "aquiiiiiiiiiiiiiii");
                const { body } = req;
                const newUser = yield (0, user_service_1.createUser)(body);
                res.json(newUser);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: "Erro ao criar usuário" });
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield (0, user_service_1.getUsers)();
                res.json(users);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: "Erro ao buscar usuários" });
            }
        });
    }
    getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userId } = req.params;
                const users = yield (0, user_service_1.getUser)(Number(userId));
                res.json(users);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: "Erro ao buscar usuários" });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userId } = req.params;
                const body = req.body;
                const users = yield (0, user_service_1.updateUser)(Number(userId), body);
                res.json(users);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: "Erro ao buscar usuários" });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userId } = req.params;
                const users = yield (0, user_service_1.deleteUser)(Number(userId));
                res.json(users);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: "Erro ao buscar usuários" });
            }
        });
    }
}
exports.default = new UserController();
