const { Pool } = require('pg');

const pool = new Pool({
  user: 'neondb_owner',
  host: 'ep-damp-sunset-aecai72u-pooler.c-2.us-east-2.aws.neon.tech',
  database: 'cities_app',
  password: 'npg_j84tViNZLzcs',
  port: 5432,
});

module.exports = pool;
