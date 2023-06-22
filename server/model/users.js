require('dotenv').config();
const pool = require('./database');

const insertUser = async (email, password, l_name, f_name) => {
    const newUser =  await pool.query(`INSERT INTO users (email, password, l_name, f_name ) VALUES ($1, $2, $3, $4) RETURNING email, l_name, f_name `, 
        [email, password, l_name, f_name]);

    return newUser.rows[0];
};




// vvvvvv DON'T MODIFY THE BELOW. FOR PASSPORT AUTHENTICATION vvvvvv

const getUserByEmail = async (email) => {
    const result = await pool.query(`SELECT * FROM users WHERE email = $1`, 
        [email]);
    return result.rows[0];
};

const getUserById = async (id) => {
    const result = await pool.query(`SELECT * FROM users WHERE id = $1`,
        [id]);
    return result.rows[0];
}

module.exports = {
    insertUser,
    getUserByEmail,
    getUserById,
};

