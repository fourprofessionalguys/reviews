const router = require('express').Router();
const knex = require('knex');

router.get('/all', (req, res) => {
  knex.from('reviews').select('text')
    .then(reviews => {
      console.log('reviews', reviews);

    })
});

module.exports = router;