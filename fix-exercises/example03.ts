interface Person {
  id: number;
  name: string;
  showIdentification(): void;
}

class PhysicalPerson implements Person {
  private static lastId = 0;
  private _name: string;
  private _id: number;
  private _cpf: string;

  constructor(name: string, cpf: string) {
    this._id = PhysicalPerson.newId();
    this._name = name;
    this._cpf = cpf;
  }

  private static newId() {
    return this.lastId += 1;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get cpf() {
    return this._cpf;
  }

  showIdentification(): void {
    console.log(this._id, this._cpf);
  }
}

class LegalPerson implements Person {
  private static lastId = 0;
  private _id: number;
  private _name: string;
  private _cnpj: string;

  constructor(name: string, cnpj: string) {
    this._id = LegalPerson.newId();
    this._name = name;
    this._cnpj = cnpj;
  }

  private static newId() {
    return this.lastId += 1;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get cnpj() {
    return this._cnpj;
  }

  showIdentification(): void {
    console.log(this._id, this._cnpj);
  }
}

const pp0 = new PhysicalPerson('Thomas', '11122248876');
const pp1 = new PhysicalPerson('Mano', '12345678946');
const lp = new LegalPerson('International SA', '122335486779');

const showIdentification = (person: Person) => {
  person.showIdentification();
}

showIdentification(pp0);
showIdentification(pp1);
showIdentification(lp);
