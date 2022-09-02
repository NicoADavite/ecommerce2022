'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Histories', {
      date: {
        type: Sequelize.DATE
      },
      OrderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      StateId: {
        type: Sequelize.INTEGER, 
        allowNull: false,
        primaryKey: true,
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Histories');
  }
};