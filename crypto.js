const crypto = require('crypto');
console.log(crypto.randomBytes(32).toString('hex'));  // Generates a secure API key
