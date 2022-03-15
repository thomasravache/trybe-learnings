"use strict";
class LocalDbModel {
    constructor(db) {
        this.db = db;
    }
    create(character) {
        this.db.push({ id: this.db.length + 1, name: character.name, specialMove: character.specialMove });
    }
    read() {
        return this.db;
    }
    update(character) {
        const characterIndex = this.db.findIndex((char) => char.id === character.id);
        this.db.splice(characterIndex, 1, character);
        return character;
    }
    remove(id) {
        const characterIndex = this.db.findIndex((character) => character.id === id);
        this.db.splice(characterIndex, 1);
    }
    findById(id) {
        const findedCharacter = this.db.find((character) => character.id === id);
        return findedCharacter;
    }
}
class CharacterService {
    constructor(model) {
        this.model = model;
    }
    create(character) {
        this.model.create(character);
    }
    read() {
        return this.model.read();
    }
    update(character) {
        const findedCharacter = this.model.findById(character.id);
        if (!findedCharacter)
            throw new Error('character not found');
        this.model.update(character);
        return character;
    }
    remove(id) {
        const findedCharacter = this.model.findById(id);
        if (!findedCharacter)
            throw new Error('character not found');
        this.model.remove(id);
    }
}
class MockedDbModel extends LocalDbModel {
    constructor(mockedDb) {
        super(mockedDb);
        this.mockedDb = mockedDb;
    }
}
const db = [];
const mockedDb = [
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
}
catch (e) {
    console.log(e.message);
}
