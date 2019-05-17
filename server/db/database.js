const data = require('./dataGenerator.js')
const pg = require('pg');
const knex = require('knex')({
  client: 'pg',
  version: '11.3',
  connection: {
    host: 'http://localhost:3003',
    user: 'student',
    password: 'student',
    database: 'airbnb_clone'
  }
});

// -------------- SEEDING DATABASE
for (let group of data.data) {
  knex('hosts')
    .insert(group.host)

  knex.from('hosts')
    .select('id')
    .where(group.host.name)
    .then(hostId => {
      groups.listing.host_id = hostId;
      knex('listings')
        .insert(groups.listing)
        .then((data) => {
          for (let i = 0; i < groups.reviews.length; i++) {
            knex('users').insert(groups.users[i])
              .then(() => {
                knex.from('users')
                  .select('id')
                  .where({ name: groups.users[i].name })
                  .then(userId => {
                    group.reviews[i].user_id = userId;
                    group.reviews[i].listing_id = data.id;
                    knex('reviews')
                      .insert(group.reviews[i])
                  });
              });
          }
        });
    });
}





module.exports = database;