"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const write_1 = __importDefault(require("./write"));
const read_1 = __importDefault(require("./read"));
const UserModel = {
    write: write_1.default,
    read: read_1.default,
};
exports.default = UserModel;
