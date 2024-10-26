fetch('/leaderboard')
    .then(response => response.json())
    .then(data => {
        const leaderboard = document.getElementById('leaderboard');
        data.forEach((entry, index) => {
            leaderboard.innerHTML += `
                <p>${index + 1}. ${entry.username} - ${entry.score} points</p>`;
        });
    });
