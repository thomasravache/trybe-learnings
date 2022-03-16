import { OrderItem } from './OrderItem'
import { Person } from '../Person';
import { Months } from '../enums/Months';

type Payment = 'cartão' | 'dinheiro' | 'vale';

export class Order {
  private _client: Person;
  private _items: OrderItem[];
  private _paymentMethod: Payment;
  private _discount: number;

  constructor(
    client: Person,
    items: OrderItem[],
    paymentMethod: Payment,
    discount: number,
  ) {
    const paymentMethods: Payment[] = ['cartão', 'dinheiro', 'vale'];
    if (items.length === 0) throw new Error('Pedido não pode estar vazio');
    if (!paymentMethods.includes(paymentMethod)) throw new Error('Forma de pagamento inválida');
    if (discount < 0) throw new Error('Desconto não pode ser negativo');

    this._client = client;
    this._items = items;
    this._paymentMethod = paymentMethod;
    this._discount = discount;
  }

  private sumPrices(): number {
    const sumOfPriceItems = this._items
      .reduce<number>((acc, curr) => acc + curr.price, 0);

    return sumOfPriceItems;
  }

  public getTotal(): number {
    const total: number = this.sumPrices();
    if (this._discount === 0) {
      return total;
    }

    return total - (total * this._discount);
  }

  public get client(): Person {
    return this._client;
  }

  public setClient(client: Person): void {
    this._client = client;
  }

  public get paymentMethod(): Payment {
    return this._paymentMethod;
  }
}


console.log('------Order.ts--------');

const person1 = new Person('Thomas', new Date(1998, Months.julho, 27));
const orderItem1 = new OrderItem('Coca-cola', 20);
const orderItem2 = new OrderItem('Fofura', 4);
const order1 = new Order(person1, [orderItem1, orderItem2], 'cartão', 0);

console.log(order1.getTotal());
