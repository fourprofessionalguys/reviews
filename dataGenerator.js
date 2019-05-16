const faker = require('faker');

const randomBoundedInt = function randomBoundedInt(bound) {
  return Math.floor(Math.random() * (bound + 1));
};

const randomIntInRange = function randomIntInRange(start, end) {
  return Math.floor(Math.floor() * (end - start + 1)) + start;
};

const randomFromList = function randomFromList(list) {
  return list[randomIntInRange(0, list.length - 1)];
};

const randomPercentage = function randomPercentage() {
  return `%${randomIntInRange(25, 100)}`;
};

const randomTimeRangeString = function randomTimeRangeString(frame) {
  return `Between ${randomIntInRange(1, 5)} to ${randomIntInRange(5, 24)} ${frame}`;
};

const generateOneListing = function generateOneListing(host_id) {
  return {
    id: faker.random.uuid(),
    title: faker.company.catchPhrase(),
    description: (() => {
      const adjective = ['beautiful', 'scenic', 'delightful', 'lovely'];
      const location = ['in the heart of downtown', 'a short walk from the beach', 'at a seculeded location', 'in the middle of the woods'];
      return `A ${adjective[randomIntInRange(0, adjective.length - 1)]} place to stay ${location[randomIntInRange(0, location.length - 1)]}.`;
    })(),
    address: `${faker.address.streetAdress()}, ${faker.address.state()}, ${faker.address.country()}, ${faker.address.zipCode()}`,
    cost: faker.commerce.price(),
    bedrooms: randomIntInRange(1, 12),
    beds: randomIntInRange(1, 12),
    baths: randomIntInRange(1, 10),
    host_id: host_id
  };
};

const generateOneReview = function generateOneReview(user_id, listing_id) {
  return {
    id: faker.random.uuid(),
    text: faker.random.words(),
    date: faker.date.past(),
    user_id: user_id,
    listing_id: listing_id
  }
};

const generateOneUser = function generateOneUser() {
  return {
    id: faker.random.uuid(),
    name: `${faker.name.firstName()} ${faker.name.lastName}`,
    photo_url: faker.image.imageUrl(),
  }
};

const generateOneHost = function generateOneHost() {
  return {
    id: faker.random.uuid(),
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    description: faker.lorem.sentences(),
    language: randomFromList(['Italiano', 'Português', '日本語', 'Français', 'Deutsch', 'English', 'Dansk']),
    date_joined: faker.date.past(),
    response_rate: randomPercentage(),
    response_time: randomTimeRangeString('hours')
  }
};

const buildOneListing = function buildOneListing() {
  let host = generateOneHost();
  let listing = generateOneListing(host.id);
  let numberOfReviews = randomBoundedInt(20);
  let reviews = [];
  let users = []
  for (let i = 0; i < numberOfReviews; i++) {
    let user = generateOneUser();
    reviews.push(generateOneReview(user.id, listing.id));
    users.push(user);
  }
  return {
    listing,
    host,
    reviews,
    users
  }
};

const buildNListings = function buildNListings(n) {
  let listings = [];
  for (let i = 0; i < n; i++) {
    listings.push(buildOneListing);
  }
  return listings;
}

module.exports.data = buildNlistings(100);
