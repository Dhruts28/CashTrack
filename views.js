const express = require('express');
const router = express.Router();
const db = require('../db');

// Monthly spending
router.get('/monthly-spending', (req, res) => {
  db.query('SELECT * FROM monthly_spending_view', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// User total balance
router.get('/total-balance', (req, res) => {
  db.query('SELECT * FROM user_total_balance_view', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Total expenses
router.get('/total-expenses', (req, res) => {
  db.query('SELECT * FROM total_expenses_view', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

module.exports = router;
