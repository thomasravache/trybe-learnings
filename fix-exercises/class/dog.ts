class Dog {
  name: string;
  age: number;
  color: string;

  constructor(name: string, age: number, color: string) {
    this.name = name;
    this.age = age;
    this.color = color;
  }

  latir(): void {
    console.log('Au Au');
  }

  mostrarInfo(): void {
    console.log(`- Nome: ${this.name}\n- Idade: ${this.age}\n- Cor: ${this.color}`);
  }
}

const meuCachorrinho = new Dog('Paçoquinha', 4, 'branco');

meuCachorrinho.mostrarInfo();
