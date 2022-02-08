const Book = (sequelize, DataTypes) => {
  const book = sequelize.define('User', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
  });

  return book;
};

module.exports = Book;
