module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'Employees',
  });

  Employee.associate = (models) => {
    Employee.hasMany(models.Address, {
      foreignKey: 'employee_id',
      as: 'addresses'
    });
  };

  return Employee;
}