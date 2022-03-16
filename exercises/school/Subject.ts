export class Subject {
  private _name: string;

  constructor(name: string) { 
    if (name.length < 3) throw new Error('nome deve ter no mínimo 3 caracteres');

    this._name = name;
   }

  public get name(): string {
    return this._name;
  }

  public setName(newName: string): void {
    if (newName.length < 3) throw new Error('nome deve ter no mínimo 3 caracteres');
    this._name = newName;
  }
}

export const subject1 = new Subject('Matemática');
export const subject2 = new Subject('História');
export const subject3 = new Subject('Filosofia');
const randomString = Math.random().toFixed(16);
console.log(parseInt(randomString.slice(2), 10));

console.log(subject1.name);
