class Subject {
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

const subject1 = new Subject('Matemática');
const subject2 = new Subject('História');
const subject3 = new Subject('Filosofia');

console.log(subject1.name);
