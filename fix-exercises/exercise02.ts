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

class MockedDbModel extends LocalDbModel implements IModel {
  constructor(public mockedDb: DbCharacter[]) {
    super(mockedDb);
  }
}

const db: DbCharacter[] = [];
const mockedDb: DbCharacter[] = [
  {
    id: 1,
    name: 'Super Shock',
    specialMove: 'Choquinho',
  },
  {
    id: 2,
    name: 'Capitão Cueca',
    specialMove: 'Super cuecão',
  }
];

const mockedModel = new MockedDbModel(mockedDb);
const characterModel = new LocalDbModel(db);

const characterServiceWithMockDb = new CharacterService(mockedModel);
const characterService = new CharacterService(characterModel);

characterService.create({ name: 'Ciclope', specialMove: 'Laser' });
characterService.create({ name: 'Sr. Incrível', specialMove: 'Super socão' });
console.log(characterService.read());

characterService.remove(2);
console.log(characterService.read());

characterService.update({ id: 1, name: 'Gelado', specialMove: 'Congelar' });
console.log(characterService.read());

try {
  characterService.remove(2);

  console.log(characterService.read());
} catch (e: any) {
  console.log(e.message);
}
