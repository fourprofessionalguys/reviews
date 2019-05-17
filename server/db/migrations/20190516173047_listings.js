
exports.up = function (knex, Promise) {
  return Promise.all([
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
    })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('listings')
  ]);
};
