'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        user_name: 'thomasravache123',
        password: 'thominhas',
        is_admin: true,
      },
      {
        user_name: 'gabs123',
        password: 'topzera',
        is_admin: false,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
