interface Character {
  name: string;
  specialMove: string;
}

interface DbCharacter extends Character {
  id: number;
}

interface IModel {
  create(character: Character): void;
  read(): Character;
  update(newCharacter: Character): void;
  remove(character: Character): void;
}

const db: DbCharacter[] = [];