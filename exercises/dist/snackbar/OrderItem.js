"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItem = void 0;
class OrderItem {
    constructor(name, price) {
        this.validateName(name);
        this.validatePrice(price);
        this._name = name;
        this._price = price;
    }
    validateName(name) {
        if (name.length < 3)
            throw new Error('nome do produto deve ter no minimo 3 caracteres');
    }
    validatePrice(price) {
        if (price < 0)
            throw new Error('O preço não pode ser negativo');
    }
    get price() {
        return this._price;
    }
    setPrice(price) {
        this.validatePrice(price);
        this._price = price;
    }
    get name() {
        return this._name;
    }
    setName(name) {
        this.validateName(name);
        this._name = name;
    }
}
exports.OrderItem = OrderItem;
