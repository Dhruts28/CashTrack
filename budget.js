const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  db.query('SELECT * FROM budget', (err, rows) => {
    if (err) return res.status(500).json({ error: err });
    res.json(rows);
  });
});

router.post('/', (req, res) => {
  const { user_id, category_id, amount, start_date, end_date } = req.body;
  db.query(
    'INSERT INTO budget (user_id, category_id, amount, start_date, end_date) VALUES (?, ?, ?, ?, ?)',
    [user_id, category_id, amount, start_date, end_date],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({ id: result.insertId });
    }
  );
});

module.exports = router;
