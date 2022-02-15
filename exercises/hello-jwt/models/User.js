module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'Users',
  });

  return User;
};
