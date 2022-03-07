"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductService_1 = __importDefault(require("../service/ProductService"));
const statusCodes_1 = __importDefault(require("../types/enums/statusCodes"));
const productSchema_1 = __importDefault(require("./schemas/productSchema"));
const functions_1 = require("../functions");
const productRoutes = (0, express_1.Router)();
const validateProduct = (body) => {
    const { error } = productSchema_1.default.validate(body);
    if (error)
        throw error;
    if (body.validade === body.fabricacao) {
        throw (0, functions_1.generatedError)('Data de fabricação não pode ser igual a validade', statusCodes_1.default.BAD_REQUEST);
    }
};
productRoutes.get('/', (_req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield ProductService_1.default.getAll();
    return res.status(statusCodes_1.default.OK).json(products);
}));
productRoutes.get('/unexpired', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield ProductService_1.default.unexpiredProducts();
    return res.status(statusCodes_1.default.OK).json(products);
}));
productRoutes.get('/search', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { initialPrice, finalPrice } = req.query;
    const searchedProducts = yield ProductService_1.default.search(parseFloat(initialPrice), parseFloat(finalPrice));
    return res.status(statusCodes_1.default.OK).json(searchedProducts);
}));
productRoutes.get('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const product = yield ProductService_1.default.getById(parseInt(id, 10));
        return res.status(statusCodes_1.default.OK).json(product);
    }
    catch (e) {
        return next(e);
    }
}));
productRoutes.post('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const newProduct = req.body;
    try {
        validateProduct(newProduct);
        const createdProduct = yield ProductService_1.default.create(newProduct);
        return res.status(statusCodes_1.default.CREATED).json(createdProduct);
    }
    catch (e) {
        return next(e);
    }
}));
productRoutes.put('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const productNewInfo = req.body;
    try {
        validateProduct(productNewInfo);
        const editedProduct = yield ProductService_1.default.editProduct(Object.assign({ id: parseInt(id, 10) }, productNewInfo));
        return res.status(statusCodes_1.default.OK).json(editedProduct);
    }
    catch (e) {
        return next(e);
    }
}));
productRoutes.delete('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield ProductService_1.default.removeProduct(parseInt(id, 10));
        return res.status(statusCodes_1.default.NO_CONTENT).end();
    }
    catch (e) {
        return next(e);
    }
}));
exports.default = productRoutes;
