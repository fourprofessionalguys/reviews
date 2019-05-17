const data = require('./dataGenerator.js')
const pg = require('pg');
const knex = require('knex');

const database = knex({
  client: 'ps',
  version: '11.3',
  connection: {
    host: '127.0.0.1',
    user: 'student',
    password: 'student',
    database: 'airbnb_clone'
  }
});

// database.schema.createTable('listings', table => {
//   table.uuid('id').primary()
//   table.string('description')
//   table.string('city')
//   table.string('state')
//   table.string('country')
//   table.decimal('cost')
//   table.integer('capacity')
//   table.string('type')
//   table.integer('bedrooms')
//   table.integer('beds')
//   table.integer('baths')
//   table.text('photoUrl')
//   table.foreign('host_id').references('hosts.id')
// });

// database.schema.createTable('hosts', table => {
//   table.uuid('id').primary()
//   table.string('name')
//   table.string('description')
//   table.text('hostUrl')
//   table.date('dateJoined')
//   table.string('responseRate')
//   table.timestamp('responseTime')
// });

// database.schema.createTable('users', table => {
//   table.uuid('id').primary()
//   table.string('name')
//   table.text('photoUrl')
// });

// database.schema.createTable('reviews', table => {
//   table.uuid('id').primary()
//   table.text('text')
//   table.foreign('user_id').references('users.id')
//   table.foreign('listing_id').references('listings.id')
// });

// -------------- SEEDING DATABASE

// for (let group of data.data) {
//   knex('hosts')
//     .insert(group.host)

//   knex.from('hosts')
//     .select('id')
//     .where(group.host.name)
//     .then(hostId => {
//       console.log('hostId', hostId);
//       groups.listing.host_id = hostId;
//       knex('listings')
//         .insert(groups.listing)
//         .returning('id')
//         .then(listingId => {
//           for (let i = 0; i < groups.reviews.length; i++) {
//             knex('users').insert(groups.users[i])
//               .then(() => {
//                 knex.from('users')
//                   .select('id')
//                   .where({ name: groups.users[i].name })
//                   .returning('id')
//                   .then(userId => {
//                     group.reviews[i].user_id = userId;
//                     group.reviews[i].listing_id = listingId;
//                     knex('reviews')
//                       .insert(group.reviews[i])
//                   });
//               });
//           }
//         });
//     });
// }


module.exports = database;