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
const RestaurantService_1 = __importDefault(require("../service/RestaurantService"));
const statusCodes_1 = __importDefault(require("../types/enums/statusCodes"));
const restaurantSchema_1 = __importDefault(require("./schemas/restaurantSchema"));
const restaurantRoutes = (0, express_1.Router)();
const validateRestaurant = (body) => {
    const { error } = restaurantSchema_1.default.validate(body);
    if (error)
        throw error;
};
restaurantRoutes.get('/', (_req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    const restaurants = yield RestaurantService_1.default.getAll();
    return res.status(statusCodes_1.default.OK).json(restaurants);
}));
restaurantRoutes.get('/opened', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const restaurants = yield RestaurantService_1.default.openedRestaurants();
    return res.status(statusCodes_1.default.OK).json(restaurants);
}));
restaurantRoutes.get('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const restaurant = yield RestaurantService_1.default.getById(parseInt(id, 10));
        return res.status(statusCodes_1.default.OK).json(restaurant);
    }
    catch (e) {
        return next(e);
    }
}));
restaurantRoutes.post('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const newRestaurant = req.body;
    try {
        validateRestaurant(newRestaurant);
        const createdRestaurant = yield RestaurantService_1.default.create(newRestaurant);
        return res.status(statusCodes_1.default.CREATED).json(createdRestaurant);
    }
    catch (e) {
        return next(e);
    }
}));
restaurantRoutes.put('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const restaurantNewInfo = req.body;
    try {
        validateRestaurant(restaurantNewInfo);
        const editedRestaurant = yield RestaurantService_1.default.editRestaurant(Object.assign({ id: parseInt(id, 10) }, restaurantNewInfo));
        return res.status(statusCodes_1.default.OK).json(editedRestaurant);
    }
    catch (e) {
        return next(e);
    }
}));
restaurantRoutes.delete('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield RestaurantService_1.default.removeRestaurant(parseInt(id, 10));
        return res.status(statusCodes_1.default.NO_CONTENT).end();
    }
    catch (e) {
        return next(e);
    }
}));
exports.default = restaurantRoutes;
