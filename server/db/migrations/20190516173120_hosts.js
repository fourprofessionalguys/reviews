
exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('hosts', table => {
      table.uuid('id').primary()
      table.string('name')
      table.string('description')
      table.text('hostUrl')
      table.date('dateJoined')
      table.specificType('responseRate', 'int4range')
      table.timestamp('responseTime')
    })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('hosts')
  ]);
};
