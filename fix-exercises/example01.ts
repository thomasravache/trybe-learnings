class Animal {
  /*
    Ao invés de declarar os atributos antes do construtor, receber parâmetros 
    no construtor e colocá-los nos atributos da classe, se não formos 
    validar, podemos utilizar uma forma simplificada de escrita, simplesmente
    colocando o modificador de visibilidade na frente
    do nome do parâmetro no construtor

    Exemplo
    O seguinte código:

    public x: number
    constructor(x: number) { this.x = x }

    Pode ser substituído por:

    constructor(public x: number) { }
  */
  constructor(
    public name: string,
    private birthDate: Date,
  ) {  }

  get age() {
    const today = new Date();
    let age = today.getFullYear() - this.birthDate.getFullYear();
    console.log(`
      ${today}
      ${age}
    `);
    if (today.getMonth() - this.birthDate.getMonth() <= 0 && today.getDate() <= this.birthDate.getDate()) {
      age--;
      console.log('\n', age);
    }

    return age;
  }
}

class Mammal extends Animal {
  walk() {
    console.log(`${this.name} está andando!`)
  }
}

const d1 = new Date();
d1.setFullYear(2015);

const m1 = new Mammal('Tatu', d1);

const myFunc = (animal: Animal) => {
  console.log(animal.age);
}

myFunc(m1);
m1.walk();

class Bird extends Animal {
  fly() {
    console.log(`${this.name} está voando!`);
  }
}

const bird = new Bird('Passarinho', d1);

bird.fly();
