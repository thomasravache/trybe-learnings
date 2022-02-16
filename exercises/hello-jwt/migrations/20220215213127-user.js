'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const UsersTable = queryInterface.createTable('Users', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      user_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      is_admin: {
        defaultValue: false,
        allowNull: false,
        type: Sequelize.BOOLEAN,
      }
    });

    return UsersTable;
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
