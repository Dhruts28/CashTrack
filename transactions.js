const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  db.query('SELECT * FROM transactions', (err, rows) => {
    if (err) return res.status(500).json({ error: err });
    res.json(rows);
  });
});

router.post('/', (req, res) => {
  const { user_id, amount, category_id, date, description } = req.body;
  db.query(
    'INSERT INTO transactions (user_id, amount, category_id, date, description) VALUES (?, ?, ?, ?, ?)',
    [user_id, amount, category_id, date, description],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({ id: result.insertId });
    }
  );
});

module.exports = router;
