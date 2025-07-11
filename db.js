const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'dbcountries',
  password: 'Valery2005*',
  port: 5432,
});

module.exports = pool;