require('dotenv').config();
const pool = require('./database');

const insertUser = async (username, password) => {
    const newUser =  await pool.query(`INSERT INTO users (username, password) VALUES ($1, $2) RETURNING username`, 
        [username, password]);

    return newUser.rows[0];
};

const getUserByUsername = async (username) => {
    const result = await pool.query('SELECT * FROM users WHERE username = $1', 
        [username]);
    return result.rows[0];
};

module.exports = {
    insertUser,
    getUserByUsername,
};