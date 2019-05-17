DROP DATABASE IF EXISTS "airbnb-clone";
CREATE DATABASE "airbnb-clone";

\c "airbnb-clone";

CREATE TABLE listings
(
  id uuid UNIQUE DEFAULT uuid_generate_v4 (),
  title VARCHAR(60) NOT NULL,
  description TEXT,
  city VARCHAR(50),
  state VARCHAR(15),
  country VARCHAR(65),
  cost MONEY(8),
  capacity SMALLINT(2),
  type VARCHAR(40),
  bedrooms SMALLINT(2),
  beds SMALLINT(2),
  baths SMALLINT(2),
  photoUrl TEXT,
  hosts_id uuid REFERENCES hosts (id),
  PRIMARY KEY (id)
);

CREATE TABLE hosts
(
  id uuid UNIQUE DEFAULT uuid_generate_v4 (),
  name VARCHAR(50),
  description VARCHAR(255),
  hostUrl TEXT,
  dateJoined DATE,
  responseRate INT4RANGE
  [0,100],
  responseTime TIME[0],
  PRIMARY KEY
  (id)
);

  CREATE TABLE languages
  (
    id uuid UNIQUE DEFAULT uuid_generate_v4 (),
    language VARCHAR(30),
    PRIMARY KEY (id)
  );

  CREATE TABLE languages_hosts
  (
    id uuid UNIQUE DEFAULT uuid_generate_v4 (),
    languages_id uuid REFERENCES languages (id),
    hosts_id uuid REFERENCES hosts (id),
    PRIMARY KEY (id)
  );

  CREATE TABLE photos
  (
    id uuid UNIQUE DEFAULT uuid_generate_v4 (),
    photoUrl TEXT,
    room VARCHAR(35),
    description TEXT,
    listing_id uuid REFERENCES listings (id),
    PRIMARY KEY (id)
  );

  CREATE TABLE amentities
  (
    id uuid UNIQUE DEFAULT uuid_generate_v4 (),
    name VARCHAR(40),
    photo_url TEXT,
    PRIMARY KEY (id)
  );

  CREATE TABLE listing_amenities
  (
    id uuid UNIQUE DEFAULT uuid_generate_v4 (),
    listing_id uuid REFERENCES listings (id),
    amenities_id uuid REFERENCES amenities (id),
    PRIMARY KEY (id)
  );

  CREATE TABLE reviews
  (
    id uuid UNIQUE DEFAULT uuid_generate_v4 (),
    text TEXT,
    date DATE,
    user_id uuid REFERENCES users (id),
    listing_id uuid REFERENCES listings (id),
    PRIMARY KEY (id)
  );

  CREATE TABLE users
  (
    id uuid UNIQUE DEFAULT uuid_generate_v4 (),
    photoUrl TEXT,
    name VARCHAR(50),
    PRIMARY KEY (id)
  );