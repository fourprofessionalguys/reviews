DROP DATABASE IF EXISTS "airbnb-clone";
CREATE DATABASE "airbnb-clone";

\c "airbnb-clone";

CREATE TABLE listings
(
  id uuid UNIQUE DEFAULT uuid_generate_v4 (),
  title VARCHAR(60) NOT NULL,
  address TEXT,
  cost MONEY(8),
  capacity SMALLINT(2),
  bedrooms SMALLINT(2),
  beds SMALLINT(2),
  baths SMALLINT(2),
  description TEXT,
  amenities_id uuid REFERENCES listing_amenities (id),
  PRIMARY KEY (id)
);

CREATE TABLE hosts
(
  id uuid UNIQUE DEFAULT uuid_generate_v4 (),
  first_name VARCHAR(60),
  last_name VARCHAR(60),
  description VARCHAR(255),
  languages VARCHAR(40)
  ARRAY,
  date_joined DATE,
  response_rate INT4RANGE[0,100],
  response_time TIME[0],
  PRIMARY KEY
  (id)
);

  CREATE TABLE photos
  (
    id uuid UNIQUE DEFAULT uuid_generate_v4 (),
    room VARCHAR(35),
    description VARCHAR(255),
    property_id uuid REFERENCES listings (id)
      PRIMARY KEY (id)
  );

  CREATE TABLE amentities
  (
    id uuid UNIQUE DEFAULT uuid_generate_v4 (),
    name VARCHAR(40),
    photo_url TEXT
      PRIMARY KEY (id)
  );

  CREATE TABLE listing_amenities
  (
    id uuid UNIQUE DEFAULT uuid_generate_v4 (),
    listing_id uuid REFERENCES listings (id),
    amenities_id uuid REFERENCES amenities (id)
      PRIMARY KEY (id)
  );

  CREATE TABLE reviews
  (
    id uuid UNIQUE DEFAULT uuid_generate_v4 (),
    text TEXT,
    date DATE,
    user_id uuid REFERENCES users (id),
    listing_id uuid REFERENCES listings (id)
      PRIMARY KEY (id)
  );

  CREATE TABLE users
  (
    id uuid UNIQUE DEFAULT uuid_generate_v4 (),
    photo_url TEXT,
    name VARCHAR(50)
      PRIMARY KEY (id)
  );