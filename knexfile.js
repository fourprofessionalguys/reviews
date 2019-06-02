module.exports = {

  development: {
    client: 'pg',
    connection: {
      user: 'cdag22',
      host: 'airbnbclone.cs9w0pu3iftx.us-east-1.rds.amazonaws.com',
      password: 'cdw3aws3#',
      database: 'reviews'
    },
    useNullAsDefault: true,
    charset: 'utf8',
    migrations: {
      directory: __dirname + '/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/server/db/seeds/dev'
    }
  },

  test: {
    client: 'pg',
    connection: {
      user: 'cdag22',
      host: 'airbnbclone.cs9w0pu3iftx.us-east-1.rds.amazonaws.com',
      password: 'cdw3aws3#',
      database: 'reviews'
    },
    migrations: {
      directory: __dirname + '/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/server/db/seeds/dev'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      user: 'cdag22',
      host: 'airbnbclone.cs9w0pu3iftx.us-east-1.rds.amazonaws.com',
      password: 'cdw3aws3#',
      database: 'reviews'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      user: 'cdag22',
      host: 'airbnbclone.cs9w0pu3iftx.us-east-1.rds.amazonaws.com',
      password: 'cdw3aws3#',
      database: 'reviews'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
