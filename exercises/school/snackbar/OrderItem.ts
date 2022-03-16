export class OrderItem {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this.validateName(name);
    this.validatePrice(price);

    this._name = name;
    this._price = price;
  }

  private validateName(name: string): void {
    if (name.length < 3) throw new Error('nome do produto deve ter no minimo 3 caracteres');
  }

  private validatePrice(price: number): void {
    if (price < 0) throw new Error('O preço não pode ser negativo');
  }

  public get price(): number {
    return this._price;
  }

  public setPrice(price: number): void {
    this.validatePrice(price);
    this._price = price;
  }

  public get name(): string {
    return this._name;
  }

  public setName(name: string): void {
    this.validateName(name);
    this._name = name;
  }
}
