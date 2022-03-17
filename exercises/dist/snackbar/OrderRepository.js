"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Order_1 = require("./Order");
const Person_1 = require("../Person");
const Months_1 = require("../enums/Months");
const OrderItem_1 = require("./OrderItem");
class OrderRepository {
    constructor() {
        this._orders = [];
    }
    addOrder(order) {
        this._orders.push(order);
    }
    removeOrder({ id }) {
        const orderIndex = this._orders.findIndex((order) => order.id === id);
        if (orderIndex === -1)
            throw new Error('Order not found');
        this._orders.splice(orderIndex, 1);
    }
    listByClient(client) {
        const orders = this._orders.filter((order) => order.client === client);
        return orders.map((order) => ({
            id: order.id,
            client: order.client.name,
            items: order.items.map((item) => ({
                name: item.name,
                price: item.price,
            })),
            paymentMethod: order.paymentMethod,
            total: order.getTotal(),
        }));
    }
    listBySortedValue(string) {
        let result = [];
        if (string === 'menor') {
            result = this._orders
                .sort((a, b) => a.getTotal() - b.getTotal());
        }
        if (string === 'maior') {
            result = this._orders
                .sort((a, b) => b.getTotal() - a.getTotal());
        }
        return result.map((order) => ({
            id: order.id,
            client: order.client.name,
            items: order.items.map((item) => ({
                name: item.name,
                price: item.price,
            })),
            paymentMethod: order.paymentMethod,
            total: order.getTotal(),
        }));
    }
}
console.log('----------OrderRepository.ts--------');
const repository = new OrderRepository();
const person = new Person_1.Person('Thomão', new Date(1998, Months_1.Months.julho, 27));
const person2 = new Person_1.Person('Gabriele', new Date(1998, Months_1.Months.julho, 27));
const item1 = new OrderItem_1.OrderItem('Coca', 20);
const item2 = new OrderItem_1.OrderItem('bolacha', 7);
const myOrder = new Order_1.Order(person, [item1, item2], 'cartão', 0);
const myOrder2 = new Order_1.Order(person2, [item1], 'cartão', 0);
repository.addOrder(myOrder);
repository.addOrder(myOrder2);
console.log(repository.listBySortedValue('maior'));
console.log(repository.listByClient(person));
