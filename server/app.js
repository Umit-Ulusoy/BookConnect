const e = require('express');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('You are here!');
});

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
});