const userQuery = 'SELECT id FROM users WHERE wallet_address = ?';
db.query(userQuery, [walletAddress], (err, result) => {
    if (err) return res.status(500).send('Database error');

    if (result.length === 0) {
        // User not found
        return res.status(404).send('User not found');
    }

    const userId = result[0].id;
    // Proceed with using userId
    saveQuizResult(userId, score, res);
});
