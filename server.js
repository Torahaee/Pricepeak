require('dotenv').config();

const express = require('express');
const mysql = require('mysql2');

const app = express();

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || 'pricepeak'
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    process.exit(1); // Exit if DB fails — no point running without it
  }
  console.log('Connected to MySQL');
});

app.get('/', (req, res) => {
  res.send('Backend running');
});

app.get('/search', (req, res) => {
  const { q } = req.query;
  if (!q) return res.status(400).json({ error: 'Missing query param: q' });

  const query = `
    SELECT p.name, pr.website, pr.price, pr.link
    FROM products p
    JOIN prices pr ON p.id = pr.product_id
    WHERE p.name LIKE ?
  `;

  db.query(query, [`%${q}%`], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});