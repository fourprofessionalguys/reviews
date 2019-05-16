const knex = require('knex');
const pg = require('pg');

const database = knex({
  client: 'pg',
  version: '11.3',
  connection: {
    host: 'localhost:3001',
    user: 'student',
    password: 'student',
    database: 'airbnb-clone'
  }
});

module.exports = database;