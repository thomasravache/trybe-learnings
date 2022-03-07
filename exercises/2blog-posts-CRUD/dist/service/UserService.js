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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = __importDefault(require("../model"));
const statusCodes_1 = __importDefault(require("../types/enums/statusCodes"));
const generatedError = (message, statusCode) => {
    const error = new Error();
    error.domain = true;
    error.message = message;
    error.code = statusCode;
    return error;
};
const getAll = () => __awaiter(void 0, void 0, void 0, function* () { return model_1.default.read(); });
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield model_1.default.read();
    const user = users.find((user) => user.id === id);
    if (!user)
        throw generatedError('Usuário não encontrado', statusCodes_1.default.NOT_FOUND);
    return user;
});
const create = ({ nome, email, senha }) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield model_1.default.read();
    const emailAlreadyExists = users.some((user) => user.email === email);
    if (emailAlreadyExists)
        throw generatedError('Usuário já cadastrado na plataforma', statusCodes_1.default.CONFLIT);
    const maxId = users
        .map((user) => user.id)
        .reduce((a, b) => Math.max(a, b), 0);
    const createdUser = {
        id: maxId + 1,
        nome,
        email,
        senha,
    };
    yield model_1.default.write([...users, createdUser]);
    return createdUser;
});
const editUser = (editedUser) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield model_1.default.read();
    const userIndex = users.findIndex((user) => user.id === editedUser.id);
    if (userIndex === -1)
        throw generatedError('Usuário não encontrado', statusCodes_1.default.NOT_FOUND);
    const emailAlreadyExists = users.some((user) => user.email === editedUser.email);
    if (emailAlreadyExists)
        throw generatedError('Usuário com e-mail já cadastrado na plataforma', statusCodes_1.default.CONFLIT);
    users.splice(userIndex, 1, editedUser);
    yield model_1.default.write(users);
    return editedUser;
});
const removeUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield model_1.default.read();
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1)
        throw generatedError('Usuário não encontrado', statusCodes_1.default.NOT_FOUND);
    const newUsers = users.splice(userIndex, 1);
    yield model_1.default.write(newUsers);
});
const UserService = {
    getAll,
    getById,
    create,
    editUser,
    removeUser,
};
exports.default = UserService;
