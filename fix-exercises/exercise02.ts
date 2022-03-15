interface Character {
  name: string;
  specialMove: string;
}

interface DbCharacter extends Character {
  id: number;
}


interface IModel {
  create(character: Character): void;
  read(): DbCharacter[];
  update(character: DbCharacter): DbCharacter;
  remove(id: number): void;
}

class LocalDbModel implements IModel {
  constructor(private db: DbCharacter[]) {  }
  
  public create(character: Character): void {
    this.db.push({ id: this.db.length + 1, name: character.name, specialMove: character.specialMove })
  }
  
  public read(): DbCharacter[] {
    return this.db;
  }
  
  public update(character: DbCharacter): DbCharacter {
    const characterIndex = this.db.findIndex((char) => char.id === character.id);

    this.db.splice(characterIndex, 1, character);
    
    return character;
  }
  
  public remove(id: number): void {
    const characterIndex = this.db.findIndex((character) => character.id === id);
    
    this.db.splice(characterIndex, 1);
  }

  public findById(id: number): DbCharacter | undefined {
    const findedCharacter = this.db.find((character) => character.id === id);

    return findedCharacter;
  }
}

class CharacterService implements IModel {
  constructor(public model: LocalDbModel) {  }

  public create(character: Character): void {
    this.model.create(character);
  }

  public read(): DbCharacter[] {
    return this.model.read();
  }

  public update(character: DbCharacter): DbCharacter {
    const findedCharacter = this.model.findById(character.id);

    if (!findedCharacter) throw new Error('character not found');

    this.model.update(character);
    
    return character;
  }

  public remove(id: number): void {
    const findedCharacter = this.model.findById(id);

    if (!findedCharacter) throw new Error('character not found');

    this.model.remove(id);
  }
}

const db: DbCharacter[] = [];