const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_YQVJXAM0KRr4@ep-restless-sunset-a8txfsrn-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require'
});



module.exports = pool;
