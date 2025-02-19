const mongoose = require('mongoose');
const testSetup = require('./testSetup');
const Post = require('../../models/Post');
const mockReviews = [
    {
        title: 'Love of two people - Kürk Mantolu Madonna',
        content: 'First of all, hello everyone! Kürk Mantolu Madonna is one of the books I love so much',
        coverImage: 'https://exampleimageurl.com/',
        author: '60cfe8a12a501e001c34a2a1',
        taggedBook: '60cfe8b52a501e001c34a2a2'
    },
    {
        title: 'Another Review - New Book',
        content: 'This is a review of a new book with random content.',
        coverImage: 'https://newexampleimageurl.com/',
        author: '60cfe8c92a501e001c34a2a3', // Yeni bir yazar ObjectID
        taggedBook: '60cfe8da2a501e001c34a2a4' // Yeni bir etiketli kitap ObjectID
    }
];

testSetup.setUp();

describe('Post model tests', async () => {
  
});