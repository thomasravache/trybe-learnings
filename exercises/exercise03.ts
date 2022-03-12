type Payment = 'cartão' | 'dinheiro';

class Customer {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  getName() {
    return this._name;
  }
}

class OrderItem {
  private _item: string;
  private _price: number;

  constructor(item: string, price: number) {
    this._item = item;
    this._price = price;
  }

  get price(): number {
    return this._price;
  }
}

class Order {
  private _customer: Customer;
  private _orderItems: OrderItem[];
  private _formOfPayment: Payment;
  private _discount: number | undefined;

  constructor(
    customer: Customer,
    orderItems: OrderItem[],
    formOfPayment: Payment,
    discount: number | undefined,
  ) {
    this._customer = customer;
    this._orderItems = orderItems;
    this._formOfPayment = formOfPayment;
    this._discount = discount;
  }

  private sumPrices(): number {
    const sumOfPriceItems = this._orderItems
      .reduce<number>((acc, curr) => acc + curr.price, 0);

    return sumOfPriceItems;
  }

  public getTotal(): number {
    const total = this.sumPrices();
    if (!this._discount) {
      return total;
    }

    return total - (total * this._discount);
  }
}
