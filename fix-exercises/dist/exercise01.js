"use strict";
class Superclass {
    constructor() {
        this.isSuper = true;
    }
    sayHello() {
        console.log('Olá, mundo!');
    }
}
class Subclass extends Superclass {
}
const myFunction = (obj) => {
    obj.sayHello();
};
const superObj = new Superclass();
const subObj = new Subclass();
myFunction(superObj);
myFunction(subObj);
