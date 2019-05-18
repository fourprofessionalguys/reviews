module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://cj:student@localhost/airbnb_clone',
    useNullAsDefault: true,
    charset: 'utf8',
    migrations: {
      directory: __dirname + '/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/server/db/seeds/dev'
    }
  }
};
