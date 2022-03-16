"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const OrderItem_1 = require("./OrderItem");
const Person_1 = require("../Person");
const Months_1 = require("../enums/Months");
class Order {
    constructor(client, items, paymentMethod, discount) {
        const paymentMethods = ['cartão', 'dinheiro', 'vale'];
        if (items.length === 0)
            throw new Error('Pedido não pode estar vazio');
        if (!paymentMethods.includes(paymentMethod))
            throw new Error('Forma de pagamento inválida');
        if (discount < 0)
            throw new Error('Desconto não pode ser negativo');
        this._client = client;
        this._items = items;
        this._paymentMethod = paymentMethod;
        this._discount = discount;
    }
    sumPrices() {
        const sumOfPriceItems = this._items
            .reduce((acc, curr) => acc + curr.price, 0);
        return sumOfPriceItems;
    }
    getTotal() {
        const total = this.sumPrices();
        if (this._discount === 0) {
            return total;
        }
        return total - (total * this._discount);
    }
    get client() {
        return this._client;
    }
    setClient(client) {
        this._client = client;
    }
    get paymentMethod() {
        return this._paymentMethod;
    }
}
exports.Order = Order;
console.log('------Order.ts--------');
const person1 = new Person_1.Person('Thomas', new Date(1998, Months_1.Months.julho, 27));
const orderItem1 = new OrderItem_1.OrderItem('Coca-cola', 20);
const orderItem2 = new OrderItem_1.OrderItem('Fofura', 4);
const order1 = new Order(person1, [orderItem1, orderItem2], 'cartão', 0);
console.log(order1.getTotal());
