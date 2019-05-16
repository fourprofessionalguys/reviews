const faker = require('faker');

const randomBoundedInt = function randomBoundedInt(bound) {
  return Math.floor(Math.random() * (bound + 1));
};

const randomIntInRange = function randomIntInRange(start, end) {
  return Math.floor(Math.floor() * (end - start + 1)) + start;
};

const randomSelect = function randomSelect(list) {
  return list[randomIntInRange(0, list.length - 1)];
};

const randomPercentage = function randomPercentage() {
  return `%${randomIntInRange(25, 100)}`;
};

const randomTimeRangeString = function randomTimeRangeString(frame) {
  return `Between ${randomIntInRange(1, 5)} to ${randomIntInRange(5, 24)} ${frame}`;
};

const randomBoundedPrice = function randomBoundedPrice() {
  return `$${randomIntInRange(100, 500)}.00`;
};

const generateRandomReview = function generateRandomReview() {
  let starter = ['OMG! ', 'JUST. WOW. ', '', '', 'What a blast! ', '', '', 'Wowie! ', 'Unfuhgetable! ', 'It was meh. ', 'It was nice. ', 'From the moment I saw the place I knew it would be a trainwreck. ', 'WARNING: not as advertised.'];
  let hostAdjective = ['very helpful and pleasant', 'kinda a jerk', 'charming', 'nice but couldn\'t stop talking about her cats', 'friendly', 'uncomfortably rotund'];
  let location = ['house', 'villa', 'apartment', 'cardboard box'];
  let locationAdjective = ['just as advertised.', 'just what the doctor ordered.', 'breath taking.', 'cute and cozy.', 'lovely.'];

  return `${randomSelect(starter)}The host was ${randomSelection(hostAdjective)} and the ${randomSelect(location)} was ${randomSelect(locationAdjective)}
  I spent `
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
    address: `${faker.address.streetAddress()}, ${faker.address.state()}, ${faker.address.country()}, ${faker.address.zipCode()}`,
    cost: randomBoundedPrice(),
    capacity: randomBoundedInt(1, 22),
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
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    photo_url: faker.image.imageUrl(),
  }
};

const generateOneHost = function generateOneHost() {
  return {
    id: faker.random.uuid(),
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    description: faker.lorem.sentences(),
    language: randomSelect(['Italiano', 'Português', '日本語', 'Français', 'Deutsch', 'English', 'Dansk']),
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
    listings.push(buildOneListing());
  }
  return listings;
}

// module.exports.data = buildOneListing();
module.exports.data = buildNListings(1);
