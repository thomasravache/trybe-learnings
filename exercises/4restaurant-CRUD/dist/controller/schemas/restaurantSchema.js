"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const restaurantSchema = joi_1.default.object({
    nome: joi_1.default.string().min(3).not().empty().required(),
    tipoComida: joi_1.default.string().min(3).not().empty().required(),
    abertura: joi_1.default.number().not().empty().required(),
    fechamento: joi_1.default.number().not().empty().required(),
});
exports.default = restaurantSchema;
