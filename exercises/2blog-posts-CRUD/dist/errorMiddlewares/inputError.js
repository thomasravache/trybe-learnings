"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const statusCodes_1 = __importDefault(require("../types/enums/statusCodes"));
const inputError = (err, req, res, next) => {
    if (err.isJoi) {
        const { details } = err;
        const { message } = details[0];
        return res.status(statusCodes_1.default.BAD_REQUEST).json({ message });
    }
    return next(err);
};
exports.default = inputError;
