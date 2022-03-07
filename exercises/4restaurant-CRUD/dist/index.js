"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const RestaurantController_1 = __importDefault(require("./controller/RestaurantController"));
const errorMiddlewares_1 = require("./errorMiddlewares");
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(body_parser_1.default.json());
app.use('/restaurant', RestaurantController_1.default);
/* Error Handlers */
app.use(errorMiddlewares_1.inputError);
app.use(errorMiddlewares_1.domainError);
app.use(errorMiddlewares_1.serverError);
app.listen(PORT, () => {
    console.log(`Ouvindo na porta ${PORT}`);
});
