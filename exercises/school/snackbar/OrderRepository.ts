import { Order } from './Order';
import { Person } from '../Person';
import { Months } from '../enums/Months';
import { OrderItem } from './OrderItem';
import { Payment } from './Order';

type maiorMenor = 'maior' | 'menor';

interface OrderRepositoryResult {
  id: number;
  client: string;
  items: {
    name: string,
    price: number,
  }[],
  paymentMethod: Payment;
  total: number;
}

class OrderRepository {
  private _orders: Order[] = [];

  public addOrder(order: Order): void {
    this._orders.push(order);
  }

  public removeOrder({ id }: Order): void {
    const orderIndex = this._orders.findIndex((order) => order.id === id);

    if (orderIndex === -1) throw new Error('Order not found');

    this._orders.splice(orderIndex, 1);
  }

  public listByClient(client: Person): OrderRepositoryResult[] {
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

  public listBySortedValue(string: maiorMenor): OrderRepositoryResult[] {
    let result: Order[] = [];

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

const person = new Person('Thomão', new Date(1998, Months.julho, 27));
const person2 = new Person('Gabriele', new Date(1998, Months.julho, 27));
const item1 = new OrderItem('Coca', 20);
const item2 = new OrderItem('bolacha', 7);
const myOrder = new Order(person, [item1, item2], 'cartão', 0);
const myOrder2 = new Order(person2, [item1], 'cartão', 0);
repository.addOrder(myOrder);
repository.addOrder(myOrder2);
console.log(repository.listBySortedValue('maior'));
console.log(repository.listByClient(person));
