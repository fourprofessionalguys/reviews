const knex = require('knex');

const database = knex({
  client: 'pg',
  version: '11.3',
  connection: {
    host: 'YOUR_IP_HERE',
    user: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    database: 'YOUR_DATABASE'
  }
});

module.exports = database;