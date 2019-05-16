const faker = require('faker');

const randomBoundedInt = function randomBoundedInt(bound) {
  return Math.floor(Math.random() * (bound)) + 1;
};

const randomIntInRange = function randomIntInRange(start, end) {
  return Math.floor(Math.random() * (end - start + 1)) + start;
};

const randomSelect = function randomSelect(list) {
  return list[randomIntInRange(0, list.length - 1)];
};

const randomSelectionRange = function randomSelectionRange(list) {
  let mid = Math.floor(list.length / 2);
  list.slice(randomIntInRange(0, mid), randomIntInRange(mid, list.length - 1));
};

const randomPercentage = function randomPercentage() {
  return `${randomIntInRange(25, 100)}%`;
};

const randomTimeRangeString = function randomTimeRangeString(frame) {
  return `Between ${randomIntInRange(1, 5)} to ${randomIntInRange(5, 24)} ${frame}`;
};

const randomBoundedPrice = function randomBoundedPrice() {
  return `$${randomIntInRange(89, 500)}.00`;
};

const randomListingTitle = function randomListingTitle() {
  let starter = ['Immaculate Architect\'s', 'Let yourself be enlightened with this', 'Stunning', 'Charming', 'Bright', 'Take a magic stroll through the city from this', 'Modern, Chic', 'Admire Stunning Ocean Views from a', 'Unwind in a'];
  let ender = ['Townhouse with terrace', 'Mediterranean style apartment near the beach', 'Studio apartment minutes from downtown', 'Parisian studio in the heart of city', 'Artist\'s studio', 'Stylish Loft', 'Penthouse with breathtaking views of the mountains'];
  return `${randomSelect(starter)} ${randomSelect(ender)}`;
};

const randomListingDescription = function randomListingDescription() {
  const adjective = ['beautiful', 'scenic', 'delightful', 'lovely'];
  const location = ['in the heart of downtown', 'a short walk from the beach', 'at a seculeded location', 'in the middle of the woods'];
  return `A ${adjective[randomIntInRange(0, adjective.length - 1)]} place to stay ${location[randomIntInRange(0, location.length - 1)]}.`;
};

const randomHostDescription = function randomHostDescription() {

};

const generateRandomReview = function generateRandomReview() {
  let starter = ['OMG! ', 'JUST. WOW. ', '', '', 'What a blast! ', '', 'Good news everyone!', 'Wowie! ', 'Unfuhgetable! ', 'It was meh. ', 'It was nice. ', 'From the moment I saw the place I knew it would be a trainwreck. ', 'WARNING: not as advertised.'];
  let hostAdjective = ['very helpful and pleasant', 'warm and friendly', 'kinda a jerk', 'charming', 'nice but couldn\'t stop talking about her cats', 'friendly', 'awkward'];
  let location = ['house', 'home', 'house', 'apartment', 'townhouse', 'house', 'apartment', 'villa', 'apartment'];
  let locationAdjective = ['just as advertised.', 'just what the doctor ordered.', 'breath taking.', 'cute and cozy.', 'lovely.'];
  let stayAdjective = ['interesting to say the least.', 'quite pleasent.', 'fun and relaxing.', 'well worth the price.'];
  let ending = ['In conclusion ', 'all in all ', '', '', '', ''];
  let ending2 = [' would say things went very well.', ' had a great time.', ' absolutely loved my time there.', ' hated it.', ' would never go back.', 't was great.'];

  return `${randomSelect(starter)}The host was ${randomSelect(hostAdjective)} and the ${randomSelect(location)} was ${randomSelect(locationAdjective)}
  The ${randomSelect(['two', 'three', 'four', 'five'])} days I spent there were ${randomSelect(stayAdjective)} ${randomSelect(ending)}I${randomSelect(ending2)}`
};

const generateOneListing = function generateOneListing(host_id) {
  return {
    title: randomListingTitle(),
    description: randomListingDescription(),
    city: faker.address.city(),
    state: faker.address.state(),
    country: faker.address.country(),
    cost: randomBoundedPrice(),
    capacity: randomBoundedInt(1, 22),
    type: randomSelect(['villa', 'apartment', 'apartment', 'house', 'house', 'house', 'apartment']),
    bedrooms: randomIntInRange(1, 12),
    beds: randomIntInRange(1, 12),
    baths: randomIntInRange(1, 10),
    photoUrl: faker.image.imageUrl(),
    host_id: host_id
  };
};

const generateOneReview = function generateOneReview(user_id, listing_id) {
  return {
    id: faker.random.uuid(),
    text: generateRandomReview(),
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
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    description: randomHostDescription(),
    dateJoined: faker.date.past(),
    language: randomSelectionRange(['Italiano', 'Português', '日本語', 'Français', 'Deutsch', 'English', 'Dansk']),
    responseRate: randomPercentage(),
    responseTime: `${randomIntInRange(1, 48)} hours`,
    hostUrl: faker.image.imageUrl()
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
module.exports.data = buildNListings(5);
