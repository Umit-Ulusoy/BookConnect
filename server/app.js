const e = require('express');
const express = require('express');
const dotenv = require('dotenv');
const connectToDatabase = require('./config/database-connection');

const app = express();

// Initialize Dotenv
dotenv.config();

// Establish database connection
connectToDatabase();

app.get('/', (req, res) => {
    res.send('You are here!');
});

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
});