'use strict';
const bcrypt = require("bcryptjs");
const {Op} = require('sequelize');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Users';
    return queryInterface.bulkInsert(options, [
      {
        email: 'testEmail.com',
        username: 'testUserName',
        firstName: 'Will',
        lastName: 'Christensen',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'testInfo.org',
        username: 'FlowerChild',
        firstName: 'Crystal',
        lastName: 'Waters',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'anotheremail.inc',
        username: 'BoiVince',
        firstName: 'Vincent',
        lastName: 'Bob',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'seedEmail.com',
        username: 'Mturn',
        firstName: 'Michael',
        lastName: 'Turner',
        hashedPassword: bcrypt.hashSync('SEEDPASS')
      },
      {
        email: 'test.com',
        username: 'Smath',
        firstName: 'Alex',
        lastName: 'Smith',
        hashedPassword: bcrypt.hashSync('passSeed')
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['testUserName', 'UserName', 'AccountName'] }
    }, {});
  }
};
