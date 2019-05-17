
exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('reviews', table => {
      table.uuid('id').primary()
      table.text('text')
      table.foreign('user_id').references('users.id')
      table.foreign('listing_id').references('listings.id')
    })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('reviews')
  ]);
};
