const express = require('express');
const db = require('../db'); // Import database connection
const generateHash = require('../utils/hashUtil'); // Import hash function

const router = express.Router();

router.post('/submit-quiz', (req, res) => {
    const { walletAddress, score } = req.body;

    // Generate hash for quiz data
    const quizHash = generateHash(JSON.stringify({ walletAddress, score }));
    console.log('Quiz Hash:', quizHash); // For demonstration

    const userQuery = 'SELECT id FROM users WHERE wallet_address = ?';
    db.query(userQuery, [walletAddress], (err, result) => {
        if (err) return res.status(500).send('Database error');

        let userId = result[0]?.id;

        if (!userId) {
            const insertUser = 'INSERT INTO users (wallet_address) VALUES (?)';
            db.query(insertUser, [walletAddress], (err, result) => {
                if (err) return res.status(500).send('Error creating user');
                userId = result.insertId;
                saveQuizResult(userId, score, quizHash, res);
            });
        } else {
            saveQuizResult(userId, score, quizHash, res);
        }
    });
});

function saveQuizResult(userId, score, hash, res) {
    const quizQuery = 'INSERT INTO quiz_results (user_id, score) VALUES (?, ?)';
    db.query(quizQuery, [userId, score], (err) => {
        if (err) return res.status(500).send('Error saving quiz result');
        res.status(200).send('Quiz result saved successfully');
    });
}

module.exports = router;
