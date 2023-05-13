const pool = require('./database');

const get = () => pool.query('SELECT * FROM ecom');