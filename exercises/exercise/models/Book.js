const Book = (sequelize, DataTypes) => {
  const book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
  }, {
    underscored: true,
    tableName: 'Books',
  });

  return book;
};

module.exports = Book;
