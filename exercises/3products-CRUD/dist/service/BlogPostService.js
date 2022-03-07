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
const generatedError = (message, statusCode) => {
    const error = new Error();
    error.domain = true;
    error.message = message;
    error.code = statusCode;
    return error;
};
const getAll = () => __awaiter(void 0, void 0, void 0, function* () { return model_1.default.read(); });
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const blogPosts = yield model_1.default.read();
    const blogPost = blogPosts.find((blogPost) => blogPost.id === id);
    if (!blogPost)
        throw generatedError('Post não encontrado', statusCodes_1.default.NOT_FOUND);
    return blogPost;
});
const create = ({ titulo, autor, categoria, criacao }) => __awaiter(void 0, void 0, void 0, function* () {
    const blogPosts = yield model_1.default.read();
    const maxId = blogPosts
        .map((blogPost) => blogPost.id)
        .reduce((a, b) => Math.max(a, b), 0);
    const createdPost = {
        id: maxId + 1,
        titulo,
        autor,
        categoria,
        criacao,
    };
    yield model_1.default.write([...blogPosts, createdPost]);
    return createdPost;
});
const editPost = (editedPost) => __awaiter(void 0, void 0, void 0, function* () {
    const blogPosts = yield model_1.default.read();
    const blogPostIndex = blogPosts.findIndex((blogPost) => blogPost.id === editedPost.id);
    if (blogPostIndex === -1)
        throw generatedError('Post não encontrado', statusCodes_1.default.NOT_FOUND);
    blogPosts.splice(blogPostIndex, 1, editedPost);
    yield model_1.default.write(blogPosts);
    return editedPost;
});
const removePost = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const blogPosts = yield model_1.default.read();
    const blogPostIndex = blogPosts.findIndex((blogPost) => blogPost.id === id);
    if (blogPostIndex === -1)
        throw generatedError('Post não encontrado', statusCodes_1.default.NOT_FOUND);
    const newBlogPosts = blogPosts.splice(blogPostIndex, 1);
    yield model_1.default.write(newBlogPosts);
});
const search = (queryParam) => __awaiter(void 0, void 0, void 0, function* () {
    const blogPosts = yield model_1.default.read();
    const filteredPosts = blogPosts.filter(({ autor, categoria, criacao }) => {
        return autor.includes(queryParam) || categoria.includes(queryParam) || criacao === queryParam;
    });
    return filteredPosts;
});
const BlogPostService = {
    getAll,
    getById,
    create,
    editPost,
    removePost,
    search,
};
exports.default = BlogPostService;
