interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {  }

  myFunc(myParam: number): string {
    const sum = this.myNumber + myParam;

    return `Sominha: ${sum}`;
  }
}

const classezinha = new MyClass(2);
console.log(classezinha.myNumber);
console.log(classezinha.myFunc(2));
