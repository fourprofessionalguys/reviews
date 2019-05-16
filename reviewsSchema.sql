DROP DATABASE IF EXISTS "airbnb-clone";
CREATE DATABASE "airbnb-clone";

\c "airbnb-clone";

CREATE TABLE listings
(
  id uuid UNIQUE DEFAULT uuid_generate_v4 (),
  name VARCHAR(60) NOT NULL,
  streetAddress VARCHAR(95),
  city VARCHAR(35),
  state VARCHAR(15),
  zipCode SMALLINT(12),
  country VARCHAR(60),
  cost MONEY(8),
  capacity SMALLINT(2),
  amenities_id uuid REFERENCES listing_amenities (id),
  PRIMARY KEY (id)
);

CREATE TABLE amentities
(
  id uuid UNIQUE DEFAULT uuid_generate_v4 (),
  name VARCHAR(40),
  photo_url TEXT
);

CREATE TABLE listing_amenities
(
  id uuid UNIQUE DEFAULT uuid_generate_v4 (),
  listing_id uuid REFERENCES listings (id),
  amenities_id uuid REFERENCES amenities (id)
);

CREATE TABLE reviews
(
  id uuid UNIQUE DEFAULT uuid_generate_v4 (),
  text TEXT,
  date DATE,
  user_id uuid REFERENCES users (id),
  listing_id uuid REFERENCES listings (id)
);

CREATE TABLE users
(
  id uuid UNIQUE DEFAULT uuid_generate_v4 (),
  photo_url TEXT,
  name VARCHAR(50)
);