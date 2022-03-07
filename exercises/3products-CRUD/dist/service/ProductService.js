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
const model_1 = __importDefault(require("../model"));
const statusCodes_1 = __importDefault(require("../types/enums/statusCodes"));
const functions_1 = require("../functions");
const getAll = () => __awaiter(void 0, void 0, void 0, function* () { return model_1.default.read(); });
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield model_1.default.read();
    const product = products.find((blogPost) => blogPost.id === id);
    if (!product)
        throw (0, functions_1.generatedError)('Produto não encontrado', statusCodes_1.default.NOT_FOUND);
    return product;
});
const create = ({ nome, marca, preco, fabricacao, validade }) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield model_1.default.read();
    const maxId = products
        .map((product) => product.id)
        .reduce((a, b) => Math.max(a, b), 0);
    const createdProduct = {
        id: maxId + 1,
        nome,
        marca,
        preco,
        fabricacao,
        validade,
    };
    yield model_1.default.write([...products, createdProduct]);
    return createdProduct;
});
const editProduct = (editedProduct) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield model_1.default.read();
    const productIndex = products.findIndex((product) => product.id === editedProduct.id);
    if (productIndex === -1)
        throw (0, functions_1.generatedError)('Produto não encontrado', statusCodes_1.default.NOT_FOUND);
    products.splice(productIndex, 1, editedProduct);
    yield model_1.default.write(products);
    return editedProduct;
});
const removeProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield model_1.default.read();
    const productIndex = products.findIndex((product) => product.id === id);
    if (productIndex === -1)
        throw (0, functions_1.generatedError)('Produto não encontrado', statusCodes_1.default.NOT_FOUND);
    const newProducts = products.splice(productIndex, 1);
    yield model_1.default.write(newProducts);
});
const search = (initialPrice, finalPrice) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield model_1.default.read();
    const filteredPosts = products.filter(({ preco }) => {
        return preco >= initialPrice && preco <= finalPrice;
    });
    return filteredPosts;
});
const unexpiredProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield model_1.default.read();
    const now = new Date().getTime();
    const unexpired = products.filter(({ validade }) => {
        return new Date(validade).getTime() >= now;
    });
    return unexpired;
});
const ProductService = {
    getAll,
    getById,
    create,
    editProduct,
    removeProduct,
    search,
    unexpiredProducts,
};
exports.default = ProductService;
