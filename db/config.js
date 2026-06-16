const { Pool } = require('pg');

console.log('vamos a ver quien es la url', process.env.DATABASE_URL);
const pool = new Pool({
  
  connectionString: process.env.DATABASE_URL
});

module.exports = pool;