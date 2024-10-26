SELECT u.username, qr.score, qr.quiz_date
FROM quiz_results qr
JOIN users u ON qr.user_id = u.id
ORDER BY qr.score DESC
LIMIT 10;
