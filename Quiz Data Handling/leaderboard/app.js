// index.js

const express = require('express');
const db = require('./db'); // Import the database connection

const app = express();
const PORT = 3000;

// Example route to test the database connection
app.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            res.status(500).send('Database query error');
            return;
        }
        res.json(results);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
