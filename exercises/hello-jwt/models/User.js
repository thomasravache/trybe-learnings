module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'Users',
  });

  return User;
};
