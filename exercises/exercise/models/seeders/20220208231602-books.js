'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('Books', [
      {
        title: 'O senhor dos anéis',
        author: 'Um maluco no pedaço',
        pageQuantity: 2,
        // createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        // updatedAt: Sequelize.literal('CURRENT_TIMESTAMP',)
      },
      {
        title: 'O senhor dos anéis 2',
        author: 'Um maluco no pedaço 2',
        pageQuantity: 2,
        // createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        // updatedAt: Sequelize.literal('CURRENT_TIMESTAMP',)
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
