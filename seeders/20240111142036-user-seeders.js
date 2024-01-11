'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Jerry Andrianto Pangaribuan',
          profession: 'Admin Micro',
          role: 'admin',
          email: 'jerryandrianto22@gmail.com',
          password: await bcrypt.hash("rahasia1234", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Yein',
          profession: 'Frontend Developer',
          role: 'user',
          email: 'yein@mail.com',
          password: await bcrypt.hash("rahasiaku1234", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
