const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/transactions', require('./routes/transactions'));
app.use('/api/categories', require('./routes/categories'));
app.use('/api/budget', require('./routes/budget'));
app.use('/api/budget-trigger', require('./routes/budget_trigger'));
app.use('/api/frequent-transactions', require('./routes/frequentTransactions'));
app.use('/api/audit-log', require('./routes/auditLog'));
app.use('/api/views', require('./routes/views'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
