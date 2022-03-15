"use strict";
class PhysicalPerson {
    constructor(name, cpf) {
        this._id = PhysicalPerson.newId();
        this._name = name;
        this._cpf = cpf;
    }
    static newId() {
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
    showIdentification() {
        console.log(this._id, this._cpf);
    }
}
PhysicalPerson.lastId = 0;
class LegalPerson {
    constructor(name, cnpj) {
        this._id = LegalPerson.newId();
        this._name = name;
        this._cnpj = cnpj;
    }
    static newId() {
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
    showIdentification() {
        console.log(this._id, this._cnpj);
    }
}
LegalPerson.lastId = 0;
const pp0 = new PhysicalPerson('Thomas', '11122248876');
const pp1 = new PhysicalPerson('Mano', '12345678946');
const lp = new LegalPerson('International SA', '122335486779');
const showIdentification = (person) => {
    person.showIdentification();
};
showIdentification(pp0);
showIdentification(pp1);
showIdentification(lp);
class Contract {
    constructor(broker) {
        this.broker = broker;
    }
    static get number() {
        return this._number;
    }
}
const c1 = new Contract(pp0);
console.log(c1.broker.cpf);
const c2 = new Contract(lp);
console.log(c2.broker.cnpj);
