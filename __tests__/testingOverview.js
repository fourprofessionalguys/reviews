const jest = require('jest');
const database = require('../server/db/dbConfig.js');

describe('Test Validity of Database Contents', () => {
  test.todo('test if all tables exist')
  test.todo('check column names of each table')
  test.todo('test if there are 100 hosts')
  test.todo('test if there are 100 listings')
  test.todo('test if there are reviews for a listing')
  test.todo('test if the number of users = number of reviews for all listings')
});

describe('Test Validity of API and Routes', () => {
  test.todo('verify http://localhost:3003 returns index.html')
  test.todo('verify http://localhost:3003/reviews returns a list of review object with correct properties')
});

describe('Test Validity of React Components', () => {
  test.todo('App.jsx renders a list of reviews')
  test.todo('App.jsx sorts reviews by date')
  test.todo('App.jsx makes a call to http://localhost:3000/reviews on load and stores results in state')
  test.todo('Review.jsx renders one review')
  test.todo('Review.jsx renders one review properly with empty text content')
  test.todo('Reviews.jsx renders a list of reviews that are sorted by date')
  test.todo('ReviewModalBody displays reviews in date sorted order from most recent to least')
  test.todo('ReviewModalBody displays all reviews')
})

/*

COMPONENT HEIRARCHY

index.jsx
  |
  |--App.jsx
      |
      |--Reviews.jsx
          |
          |--Review.jsx
          |
          |--ReviewModal.jsx
              |
              |--ReviewModalBody.jsx

*/