// Function to create the users table

const { Pool } = require('pg');

const pool = new Pool({
  user: 'your-db-username',
  host: 'your-db-host',
  database: 'your-db-name',
  password: 'your-db-password',
  port: 5432, // Replace with your database port if different
});

async function createUsersTable() {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(50) NOT NULL,
      email VARCHAR(100) NOT NULL,
      password_hash VARCHAR(100) NOT NULL
    );
  `;

  try {
    await pool.query(createTableQuery);
    console.log('Users table created (if it did not exist)');
  } catch (error) {
    console.error('Error creating users table:', error);
  }
}

module.exports = {
  query: (text, params) => pool.query(text, params),
  createUsersTable: createUsersTable,
};
