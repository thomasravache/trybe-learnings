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
}

class Order {
  private _customer: Customer;
  private _orderItems: OrderItem[];
  private _formOfPayment: Payment;
  private _discount: number | null;

  constructor(
    customer: Customer,
    orderItems: OrderItem[],
    formOfPayment: Payment,
    discount: number | null,
  ) {
    this._customer = customer;
    this._orderItems = orderItems;
    this._formOfPayment = formOfPayment;
    this._discount = discount;
  }

}
