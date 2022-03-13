interface Contract {
  subject: string;
  clauses: string[];
  signatories: Person[];
  describe(): void;
}

class Person {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
}

class NaturalPerson extends Person { // Herança
  private _cpf: string;

  constructor(name: string, cpf: string) {
    super(name);
    this._cpf = cpf;
  }

  get cpf() {
    return this._cpf;
  }
}

class LegalPerson extends Person { // Herança
  private _cnpj: string;

  constructor(name: string, cnpj: string) {
    super(name);
    this._cnpj = cnpj;
  }

  get cnpj() {
    return this._cnpj;
  }
}

class SalesContract implements Contract {
  private _signatories: Person[]; // Composição
  private _clauses: string[];

  constructor() {
    this._signatories = [];
    this._clauses = [];
  }

  get signatories(): Person[] {
    return [...this._signatories]
  }

  get clauses(): string[] {
    return [...this._clauses];
  }

  get subject(): string {
    return 'Sales';
  }

  sign(signatory: Person): void {
    this._signatories.push(signatory);
  }

  addClause(clause: string): string | undefined {
    if (this._signatories.length > 0) return;

    this._clauses.push(clause);
  }

  describe() {
    console.log('-----------');
    console.log(`Contrato: ${this.subject}`);
    this.clauses.forEach((clause, index) => { console.log(`Cláusula ${index + 1}: ${clause}`) });
    this.signatories.forEach((signatory) => { console.log(`Assinado por: ${signatory.name}`) });
    console.log('-----------\n');
  }
}

const saleContract1 = new SalesContract();
const naturalPerson1 = new NaturalPerson('Thomão', '488.555.666-76');
const naturalPerson2 = new NaturalPerson('Jubilei', '111.222.333-55');
const legalPerson = new LegalPerson('Jubiscreudo\'s SA', '11.222.222/0001-11');

saleContract1.describe();
saleContract1.addClause('Vender é legal');
saleContract1.addClause('Lucro é maneiro');
saleContract1.sign(naturalPerson1);
saleContract1.sign(naturalPerson2);
saleContract1.sign(legalPerson);
saleContract1.describe();
