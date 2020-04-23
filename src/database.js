import knex from 'knex';
import 'dotenv/config';

const pg = knex({
  client: 'pg',
  connection: {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  },
  pool: {
    max: 50,
    min: 2,
    // acquireTimeout: 60 * 1000,
    // createTimeoutMillis: 30000,
    // acquireTimeoutMillis: 30000,
    // idleTimeoutMillis: 30000,
    // reapIntervalMillis: 1000,
    // createRetryIntervalMillis: 100,
    propagateCreateError: false, // <- default is true, set to false
  },
});
module.exports = pg;
