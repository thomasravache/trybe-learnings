"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const ProductSchema = joi_1.default.object({
    nome: joi_1.default.string().not().empty().required(),
    marca: joi_1.default.string().min(3).not().empty().required(),
    preco: joi_1.default.number().min(0.01).not().empty().required(),
    validade: joi_1.default.date().not().empty().required(),
    fabricacao: joi_1.default.date().not().empty().required(),
});
exports.default = ProductSchema;
