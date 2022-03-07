"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverError = exports.inputError = exports.domainError = void 0;
const domainError_1 = __importDefault(require("./domainError"));
exports.domainError = domainError_1.default;
const inputError_1 = __importDefault(require("./inputError"));
exports.inputError = inputError_1.default;
const serverError_1 = __importDefault(require("./serverError"));
exports.serverError = serverError_1.default;
