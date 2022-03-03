"use strict";
class Dog {
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
    latir() {
        console.log('Au Au');
    }
    mostrarInfo() {
        console.log(`- Nome: ${this.name}\n- Idade: ${this.age}\n- Cor: ${this.color}`);
    }
}
const meuCachorrinho = new Dog('Paçoquinha', 4, 'branco');
meuCachorrinho.mostrarInfo();
