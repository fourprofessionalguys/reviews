// Imports
const express = require('express');
const bodyParser = require('body-parser');

const database = require('./db/dbConfig.js')

// Configuration
const app = express();
const port = 3003;

// Middleware
app.use(express.static('public'));
app.use(bodyParser.json());

// Routes
app.get('/reviews/:listingId', (req, res) => {
  let listing_id = req.params.listingId;
  if ((/(^[1-9]{1}[0-9]{0,1}$)|^100$/).test(listing_id)) {
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
  } else {
    res.status(400).end();
  }
});

module.exports = app;