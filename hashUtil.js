const crypto = require('crypto'); // Import crypto library

// Function to generate a SHA-256 hash from input data
function generateHash(data) {
    return crypto.createHash('sha256').update(data).digest('hex');
}

module.exports = generateHash; // Export the function for use elsewhere
