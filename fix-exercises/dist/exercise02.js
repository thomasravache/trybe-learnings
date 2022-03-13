"use strict";
class MyClass {
    constructor(myNumber) {
        this.myNumber = myNumber;
    }
    myFunc(myParam) {
        const sum = this.myNumber + myParam;
        return `Sominha: ${sum}`;
    }
}
const classezinha = new MyClass(2);
console.log(classezinha.myNumber);
console.log(classezinha.myFunc(2));
