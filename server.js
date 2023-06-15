const express = require('express');
const app = express();
const dotenv = require('dotenv');
const { Pool } = require('pg');

const pool = new Pool ({
    connectionString: process.env.DATABASE_URL
});

dotenv.config();

app.use(express.static('public'));

app.get('/properties', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM properties');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(process.env.PORT, () => {
    console.log(`CONNECTED ON PORT: ${process.env.PORT}`)
});