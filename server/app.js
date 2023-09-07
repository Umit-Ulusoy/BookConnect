const e = require('express');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const connectToDatabase = require('./config/database-connection');
const { sanitize } = require('sanitize');

const app = express();

// Initialize Dotenv
dotenv.config();

// Establish database connection
connectToDatabase();

// Initial CORS and Helmet middlewares
app.use(cors());
app.use(helmet());

// Sanitize requests
app.all('*', (req, res, next) => {
    req.body = sanitize(req.body);
    req.headers = sanitize(req.headers);
    req.query = sanitize(req.query);
    req.params = sanitize(req.params);

    next();
});

app.get('/', (req, res) => {
    res.send('You are here!');
});

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
});