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
const express_1 = require("express");
const UserService_1 = __importDefault(require("../service/UserService"));
const statusCodes_1 = __importDefault(require("../types/enums/statusCodes"));
const userSchema_1 = __importDefault(require("./schemas/userSchema"));
const userRoutes = (0, express_1.Router)();
const validateUser = (body) => {
    const { error } = userSchema_1.default.validate(body);
    if (error)
        throw error;
};
userRoutes.get('/', (_req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield UserService_1.default.getAll();
    return res.status(statusCodes_1.default.OK).json(users);
}));
userRoutes.get('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield UserService_1.default.getById(parseInt(id, 10));
        return res.status(statusCodes_1.default.OK).json(user);
    }
    catch (e) {
        return next(e);
    }
}));
userRoutes.post('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = req.body;
    try {
        validateUser(newUser);
        const createdUser = yield UserService_1.default.create(newUser);
        return res.status(statusCodes_1.default.CREATED).json(createdUser);
    }
    catch (e) {
        return next(e);
    }
}));
userRoutes.put('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const userNewInfo = req.body;
    try {
        validateUser(userNewInfo);
        const editedUser = yield UserService_1.default.editUser(Object.assign({ id: parseInt(id, 10) }, userNewInfo));
        return res.status(statusCodes_1.default.OK).json(editedUser);
    }
    catch (e) {
        return next(e);
    }
}));
userRoutes.delete('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield UserService_1.default.removeUser(parseInt(id, 10));
        return res.status(statusCodes_1.default.NO_CONTENT).end();
    }
    catch (e) {
        return next(e);
    }
}));
exports.default = userRoutes;
