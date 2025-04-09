const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  db.query('SELECT * FROM categories', (err, rows) => {
    if (err) return res.status(500).json({ error: err });
    res.json(rows);
  });
});

router.post('/', (req, res) => {
  const { name, type } = req.body;
  db.query('INSERT INTO categories (name, type) VALUES (?, ?)', [name, type], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ id: result.insertId });
  });
});

module.exports = router;
