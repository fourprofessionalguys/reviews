
exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', table => {
      table.uuid('id').primary()
      table.string('name')
      table.text('photoUrl')
    })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users')
  ]);
};
