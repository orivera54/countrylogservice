const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_j84tViNZLzcs@ep-damp-sunset-aecai72u-pooler.c-2.us-east-2.aws.neon.tech/cities_app?sslmode=require&channel_binding=require'
});



module.exports = pool;
