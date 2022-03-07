"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const blogPostSchema = joi_1.default.object({
    titulo: joi_1.default.string().not().empty().required(),
    autor: joi_1.default.string().min(3).not().empty().required(),
    categoria: joi_1.default.string().min(3).not().empty().required(),
    criacao: joi_1.default.date().not().empty().required(),
});
exports.default = blogPostSchema;
