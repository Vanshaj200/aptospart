const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: // 'mysqlkapassword', //
    database: 'blockchain_community'
});

// Connect to database
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to MySQL database.');
});

module.exports = db;