const knex = require('knex');

const database = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'student',
    password: 'student',
    database: 'airbnb_clone'
  }
});

module.exports = database;