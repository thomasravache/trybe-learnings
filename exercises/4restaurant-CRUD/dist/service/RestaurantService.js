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
    const restaurants = yield model_1.default.read();
    const restaurant = restaurants.find((restaurant) => restaurant.id === id);
    if (!restaurant)
        throw (0, functions_1.generatedError)('Restaurante não encontrado', statusCodes_1.default.NOT_FOUND);
    return restaurant;
});
const create = ({ nome, tipoComida, abertura, fechamento }) => __awaiter(void 0, void 0, void 0, function* () {
    const restaurants = yield model_1.default.read();
    const maxId = restaurants
        .map((restaurant) => restaurant.id)
        .reduce((a, b) => Math.max(a, b), 0);
    const createdRestaurant = {
        id: maxId + 1,
        nome,
        tipoComida,
        abertura,
        fechamento,
    };
    yield model_1.default.write([...restaurants, createdRestaurant]);
    return createdRestaurant;
});
const editRestaurant = (editedRestaurant) => __awaiter(void 0, void 0, void 0, function* () {
    const restaurants = yield model_1.default.read();
    const restaurantIndex = restaurants.findIndex((restaurant) => restaurant.id === editedRestaurant.id);
    if (restaurantIndex === -1)
        throw (0, functions_1.generatedError)('Restaurante não encontrado', statusCodes_1.default.NOT_FOUND);
    restaurants.splice(restaurantIndex, 1, editedRestaurant);
    yield model_1.default.write(restaurants);
    return editedRestaurant;
});
const removeRestaurant = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const restaurants = yield model_1.default.read();
    const restaurantIndex = restaurants.findIndex((restaurant) => restaurant.id === id);
    if (restaurantIndex === -1)
        throw (0, functions_1.generatedError)('Restaurante não encontrado', statusCodes_1.default.NOT_FOUND);
    restaurants.splice(restaurantIndex, 1);
    yield model_1.default.write(restaurants);
});
const openedRestaurants = () => __awaiter(void 0, void 0, void 0, function* () {
    const restaurants = yield model_1.default.read();
    const actualHour = new Date().getHours();
    console.log(actualHour);
    const opened = restaurants
        .filter(({ abertura, fechamento }) => actualHour >= abertura && actualHour <= fechamento);
    return opened;
});
const RestaurantService = {
    getAll,
    getById,
    create,
    editRestaurant,
    removeRestaurant,
    openedRestaurants,
};
exports.default = RestaurantService;
