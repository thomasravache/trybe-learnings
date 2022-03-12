class Superclass {
  public isSuper: boolean = true;

  public sayHello(): void {
    console.log('Olá, mundo!');
  }
}

class Subclass extends Superclass {

}

const myFunction = (obj: Superclass) => {
  obj.sayHello();
};

const superObj = new Superclass();
const subObj = new Subclass();

myFunction(superObj);
myFunction(subObj);
