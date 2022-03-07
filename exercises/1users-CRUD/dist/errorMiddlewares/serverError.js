"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const statusCodes_1 = __importDefault(require("../types/enums/statusCodes"));
const serverError = (err, _req, res, next) => {
    console.error(err);
    return res.status(statusCodes_1.default.INTERNAL_SERVER_ERROR).json({ message: 'Erro inesperado' });
};
exports.default = serverError;
