"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const userSchema = joi_1.default.object({
    nome: joi_1.default.string().min(3).not().empty().required(),
    email: joi_1.default.string().email().not().empty().required(),
    senha: joi_1.default.string().min(6).max(12).not().empty().required(),
});
exports.default = userSchema;
