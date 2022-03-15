export abstract class Character {

  constructor(public name: string) {  }

  abstract talk(): void;

  abstract specialMove(): void;
}

class MeleeCharacter extends Character {
  public talk(): void {
    console.log(`${this.name} diz: Olá, Sr.`)
  }

  public specialMove(): void {
    console.log(`${this.name} está usando o Soco Supremo!`);
  }
}

class LongRangeCharacter extends Character {
  public talk(): void {
    console.log(`${this.name} diz: Fala aeeeeee`);
  }

  public specialMove(): void {
    console.log(`${this.name} está usando o Rajada de Flechas!`);
  }
}

const myFunc = (character: Character): void => {
  character.talk();
  character.specialMove();
}

const melee = new MeleeCharacter('Black Knight');
const ranger = new LongRangeCharacter('Legolas');

myFunc(melee);
myFunc(ranger);
