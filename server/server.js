const express = require('express');
const bodyParser = require('body-parser');

// Setup Database
const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);

// Configuration
const app = express();
const port = 3003;


// Middleware
app.use(express.static('public'));
app.use(bodyParser.json());

// Routes
app.post('/reviews', (req, res) => {
  let listing_id = req.body.listing_id;
  database.from('reviews')
    .select('text', 'date', 'user_id')
    .where('listing_id', listing_id)
    .then(reviewsData => {
      database('reviews')
        .join('users', { 'users.id': 'reviews.user_id' })
        .select('name', 'photoUrl')
        .whereIn('reviews.user_id', reviewsData.map(review => review.user_id))
        .then(usersData => {
          let data = reviewsData.map((r, i) => {
            return {
              text: r.text,
              date: r.date,
              user: usersData[i].name,
              photo: usersData[i].photoUrl
            }
          });
          res.status(201).json(data);
        })
    });
});

// Server Component
app.listen(port, () => {
  console.log(`Listening on localhost:${port}`);
})