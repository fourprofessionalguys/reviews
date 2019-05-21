const database = require('../server/db/dbConfig.js');
const axios = require('axios');

describe('Test Validity of Database Contents', () => {



  describe('test if all tables exist:', () => {

    test('test if "users" table exists and holds proper data', () => {
      database.select('*').from('users')
        .then(userDataList => {
          let first = userDataList[0];
          let columns = Object.keys(first);

          expect(userDataList.length).toBeLessThanOrEqual(2000);
          expect(columns).toEqual(expect.arrayContaining(['id', 'name', 'photoUrl']))
          expect(typeof first.id).toBe('number');
          expect(typeof first.name).toBe('string');
          expect(typeof first.photoUrl).toBe('string');
        });
    });

    test('test if "hosts" table exists and holds proper data', () => {
      database.select('*').from('hosts')
        .then(hostDataList => {
          let aHost = hostDataList[0];
          let columns = Object.keys(aHost);

          expect(hostDataList.length).toBe(100);
          expect(columns).toEqual(expect.arrayContaining(['id', 'name', 'description', 'hostUrl', 'dateJoined', 'language', 'responseRate', 'responseTime']))
        });
    });

    test('test if "listings" table exists and holds proper data', () => {
      database.select('*').from('listings')
        .then(listingsData => {
          let aListing = listingsData[0];
          let columns = Object.keys(aListing);

          expect(listingsData.length).toBe(100);
          expect(columns).toEqual(expect.arrayContaining(['id', 'title', 'description', 'city', 'state', 'country', 'cost', 'capacity', 'type', 'bedrooms', 'beds', 'baths', 'photoUrl', 'host_id']));
        });
    });

    test('test if reviews table exists and holds proper data', () => {
      database.select('*').from('reviews')
        .then(reviewsData => {
          let aReview = reviewsData[0];
          let columns = Object.keys(aReview);

          expect(reviewsData.length).toBeLessThanOrEqual(2000);
          expect(columns).toEqual(expect.arrayContaining(['id', 'text', 'date', 'user_id', 'listing_id']))
        });
    });
  });




  describe('test if all table urls are valid:', () => {

    test('test if "photoUrl" of "users" is a valid url', () => {
      database.select('photoUrl').from('users').whereIn('id', [1])
        .then(data => {
          axios({
            url: data,
            method: 'GET'
          })
            .then(res => {
              expect((/20[0-9]{1}/).test(res.status)).toBe(true);
            });
        });
    });


    test('test if "hostUrl" is a valid link in "hosts" table', () => {
      database.select('hostUrl').from('hosts').whereIn('id', 1)
        .then(data => {
          axios({
            url: data,
            method: 'GET'
          })
            .then(res => {
              expect((/20[0-9]{1}/).test(res.status)).toBe(true);
            });
        });
    });

    test('test if "photoUrl" is a valid link in "listings" table', () => {
      database.select('photoUrl').from('listings').whereIn('id', 1)
        .then(data => {
          axios({
            url: data,
            method: 'GET'
          })
            .then(res => {
              expect((/20[0-9]{1}/).test(res.status)).toBe(true);
            });
        });
    });
  });




  describe('tests for foreign keys and quantity relationships:', () => {

    test('test if all reviews are linked to a valid listing', () => {
      database('reviews').select('listing_id').join('listings').where('listing_id', 'listings.id')
        .then(data => {
          database.select('*').from('reviews')
            .then(reviews => {
              expect(data.length).toEqual(reviews.length);
            })
        });
    });

    test('test if "listings" table "host_id"s are valid', () => {
      database('listings').select('host_id').join('hosts').where('host_id', 'hosts.id')
        .then(ids => {
          expect(ids.length).toBe(100);
        });
    });

    test('test if number of "users" equals number of "reviews"', () => {
      database.select('*').from('users').then(usersData => {
        database.select('*').from('reviews').then(reviewsData => {
          expect(usersData.length).toEqual(reviewsData.length);
        })
      });
    });

    test('test if each user is linked to one review', () => {
      database('reviews').select('user_id').join('users').where('users_id', 'users.id').then(matchingData => {
        database('users').select('*').then(userData => {
          expect(matchingData.length).toEqual(userData.length);
        })
      })
    })
  });
});