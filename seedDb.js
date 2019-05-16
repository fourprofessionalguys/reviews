const knex = require('knex');
const data = require('./dataGenerator.js');
const fs = require('fs');
const path = require('path');


fs.writeFile(path.join(__dirname, 'test.json'), JSON.stringify(data), { encoding: 'utf8' }, (error) => {
  if (error) console.error(error);
  else console.log('Good news everyone!');
});

// knex.schema.createTable('`', table => {