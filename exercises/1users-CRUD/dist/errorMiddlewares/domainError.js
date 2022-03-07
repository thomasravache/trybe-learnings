"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const domainError = (err, _req, res, next) => {
    if (err.domain) {
        return res.status(err.code).json({ message: err.message });
    }
    return next(err);
};
exports.default = domainError;
