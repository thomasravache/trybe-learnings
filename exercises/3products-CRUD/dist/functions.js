"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatedError = void 0;
const generatedError = (message, statusCode) => {
    const error = new Error();
    error.domain = true;
    error.message = message;
    error.code = statusCode;
    return error;
};
exports.generatedError = generatedError;
