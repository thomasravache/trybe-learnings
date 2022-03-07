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
const BlogPostService_1 = __importDefault(require("../service/BlogPostService"));
const statusCodes_1 = __importDefault(require("../types/enums/statusCodes"));
const blogPostSchema_1 = __importDefault(require("./schemas/blogPostSchema"));
const blogPostRoutes = (0, express_1.Router)();
const validatePost = (body) => {
    const { error } = blogPostSchema_1.default.validate(body);
    if (error)
        throw error;
};
blogPostRoutes.get('/', (_req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    const blogPosts = yield BlogPostService_1.default.getAll();
    return res.status(statusCodes_1.default.OK).json(blogPosts);
}));
blogPostRoutes.get('/search', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { term } = req.query;
    const searchedPosts = yield BlogPostService_1.default.search(term);
    return res.status(statusCodes_1.default.OK).json(searchedPosts);
}));
blogPostRoutes.get('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield BlogPostService_1.default.getById(parseInt(id, 10));
        return res.status(statusCodes_1.default.OK).json(user);
    }
    catch (e) {
        return next(e);
    }
}));
blogPostRoutes.post('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const newPost = req.body;
    try {
        validatePost(newPost);
        const createdPost = yield BlogPostService_1.default.create(newPost);
        return res.status(statusCodes_1.default.CREATED).json(createdPost);
    }
    catch (e) {
        return next(e);
    }
}));
blogPostRoutes.put('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const blogPostNewInfo = req.body;
    try {
        validatePost(blogPostNewInfo);
        const editedPost = yield BlogPostService_1.default.editPost(Object.assign({ id: parseInt(id, 10) }, blogPostNewInfo));
        return res.status(statusCodes_1.default.OK).json(editedPost);
    }
    catch (e) {
        return next(e);
    }
}));
blogPostRoutes.delete('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield BlogPostService_1.default.removePost(parseInt(id, 10));
        return res.status(statusCodes_1.default.NO_CONTENT).end();
    }
    catch (e) {
        return next(e);
    }
}));
exports.default = blogPostRoutes;
