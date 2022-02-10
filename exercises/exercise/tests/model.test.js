const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const BookModel = require('../models/Book');

describe('---- TESTES DO MODEL ----', () => {
  describe('O model de book', () => {
    const Book = BookModel(sequelize, dataTypes);
    const book = new Book;

    describe('possui o nome Book', () => {
      checkModelName(Book)('Book');
    });

    // it('possui as propriedades "title", "author", "pageQuantity"', () => {
    //   ['title', 'author', 'pageQuantity'].forEach(checkPropertyExists(book));
    // });
    describe('possui as propriedades "title", "author", "pageQuantity"', () => {
      ['title', 'author', 'pageQuantity'].forEach(checkPropertyExists(book));
    });
  });
});