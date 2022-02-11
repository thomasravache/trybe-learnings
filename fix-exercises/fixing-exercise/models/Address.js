module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    employeeId: { type: DataTypes.INTEGER, foreignKey: true },
  }, {
    underscored: true,
    timestamps: false,
    tableName: 'Addresses'
  });

  Address.associate = (models) => {
    Address.belongsTo(models.Employee, {
      foreignKey: 'employee_id', as: 'employees'
    });
  };

  return Address;
};
