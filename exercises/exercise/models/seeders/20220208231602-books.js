'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'O senhor dos anéis',
        author: 'Um maluco no pedaço',
        page_quantity: 2,
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'O senhor dos anéis 2',
        author: 'Um maluco no pedaço 2',
        page_quantity: 2,
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
