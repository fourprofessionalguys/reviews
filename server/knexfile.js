module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://student:student@localhost/airbnb_clone',
    useNullAsDefault: true,
    charset: 'utf8',
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/dev'
    }
  }

};
