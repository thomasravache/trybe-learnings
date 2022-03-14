abstract class Character {

  constructor(public name: string) {  }

  abstract talk(): void;

  abstract specialMove(): void;
}

class MeleeCharacter extends Character {
  public talk(): void {
    console.log(`${this.name} está falando.`)
  }

  public specialMove(): void {
    console.log(`${this.name} está usando o Ultimate!`);
  }
}

