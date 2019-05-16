const pg = require('pg');
const knex = require('knex')({
  client: 'pg',
  version: '11.3',
  connection: {
    host: 'http://localhost:3003',
    user: 'student',
    password: 'student',
    database: 'airbnb-clone'
  }
});

knex.schema.createTable('listings', table => {
  table.uuid('id').primary()
  table.string('description')
  table.string('city')
  table.string('state')
  table.string('country')
  table.decimal('cost')
  table.integer('capacity')
  table.string('type')
  table.integer('bedrooms')
  table.integer('beds')
  table.integer('baths')
  table.text('photoUrl')
  table.foreign('host_id').references('hosts.id')
});

knex.schema.createTable('hosts', table => {
  table.uuid('id').primary()
  table.string('name')
  table.string('description')
  table.text('hostUrl')
  table.date('dateJoined')
  table.specificType('responseRate', 'int4range')
  table.timestamp('responseTime')
});

knex.schema.createTable('reviews', table => {
  table.uuid('id').primary()
  table.text('text')
  table.foreign('user_id').references('users.id')
  table.foreign('listing_id').references('listings.id')
});

knex.schema.createTable('users', table => {
  table.uuid('id').primary()
  table.string('name')
  table.text('photoUrl')
});





module.exports = database;