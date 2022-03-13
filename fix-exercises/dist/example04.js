"use strict";
class Person {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
}
class NaturalPerson extends Person {
    constructor(name, cpf) {
        super(name);
        this._cpf = cpf;
    }
    get cpf() {
        return this._cpf;
    }
}
class LegalPerson extends Person {
    constructor(name, cnpj) {
        super(name);
        this._cnpj = cnpj;
    }
    get cnpj() {
        return this._cnpj;
    }
}
class SalesContract {
    constructor() {
        this._signatories = [];
        this._clauses = [];
    }
    get signatories() {
        return [...this._signatories];
    }
    get clauses() {
        return [...this._clauses];
    }
    get subject() {
        return 'Sales';
    }
    sign(signatory) {
        this._signatories.push(signatory);
    }
    addClause(clause) {
        if (this._signatories.length > 0)
            return;
        this._clauses.push(clause);
    }
    describe() {
        console.log('-----------');
        console.log(`Contrato: ${this.subject}`);
        this.clauses.forEach((clause, index) => { console.log(`Cláusula ${index + 1}: ${clause}`); });
        this.signatories.forEach((signatory) => { console.log(`Assinado por: ${signatory.name}`); });
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
