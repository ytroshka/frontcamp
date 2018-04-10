const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 9000;

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});