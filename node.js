const express = require('express');
const app = express();

// Home route
app.get('/', (req, res) => {
    res.send('🚀 Node.js app is running successfully on cPanel!');
});

// IMPORTANT for cPanel (do NOT use app.listen)
module.exports = app;