const express = require('express');
const bodyParser = require('body-parser');
const database = require('./database.js');

// Setup
const app = express();
port = 3003;


// Middleware
app.use(express.static('public'));
app.use(bodyParser.json());

// Routes
app.get('/reviews', (req, res) => {
  database.from('reviews')
    .select('text', 'date', 'user_id')
    .where('listing_id', 1)
    .then(reviewsData => {
      database('reviews')
        .join('users', { 'users.id': 'reviews.user_id' })
        .select('name')
        .whereIn('reviews.user_id', reviewsData.map(review => review.user_id))
        .then(usersData => {
          let data = reviewsData.map((r, i) => {
            return {
              text: r.text,
              date: r.date,
              user: usersData[i].name
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