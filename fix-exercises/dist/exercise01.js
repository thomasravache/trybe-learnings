"use strict";
class Superclass {
    // public isSuper: boolean = true;
    constructor(isSuper = true) {
        this.isSuper = isSuper;
    }
    sayHello() {
        console.log('Olá, mundo!');
    }
}
class Subclass extends Superclass {
    constructor() {
        super(false);
    }
}
const myFunction = (obj) => {
    obj.sayHello();
    if (obj.isSuper) {
        console.log('Super!');
    }
    else {
        console.log('Sub!');
    }
};
const superObj = new Superclass();
const subObj = new Subclass();
myFunction(superObj);
myFunction(subObj);
