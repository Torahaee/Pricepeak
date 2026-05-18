require('dotenv').config();

const express = require('express');
const mysql = require('mysql2');

const app = express();

const db = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || 'pricepeak',
  waitForConnections:true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
});

db.on('error', (err) => {
  console.error('DB error:', err.code);
});

app.get('/', (req, res) => {
  res.send('Backend running');
});

app.get('/search', (req, res) => {
  const { q } = req.query;
  if (!q) return res.status(400).json({ error: 'Missing query param: q' });

  const query = `
  SELECT 
    p.product_name,
    pl.platform_name,
    l.price
  FROM Listings l
  JOIN Products p ON l.product_id = p.product_id
  JOIN Platforms pl ON l.platform_id = pl.platform_id
  WHERE p.product_name LIKE ?
  ORDER BY l.price ASC
`;

  db.query(query, [`%${q}%`], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});