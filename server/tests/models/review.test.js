const mongoose = require('mongoose');
const testSetup = require('./testSetup');
const Review = require('../../models/Review');
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

describe('Review model tests', () => {
    it('should save a new review to the database', async () => {
        const mockReview = mockReviews[0];
        const newReview = await Review.create(mockReview);

        expect(newReview).toMatchObject(mockReview);
        expect(newReview._id).toBeDefined();
        expect(newReview.createdAt).toBeDefined();
    });

    it('should retrieve all reviews from the database', async () => {
        const newReviews = await Review.create(mockReviews);
        const reviews = await Review.find();
      
        expect(reviews).toEqual(expect.arrayContaining(mockReviews));
        expect(reviews.length).toBe(newReviews.length);
      });

      it('should delete a review from the database', async () => {
        const newReviews = await Review.create(mockReviews);
        const reviewToDelete = newReviews[0];
        const deletedReview = await Review.findByIdAndRemove(reviewToDelete._id);

        expect(deletedReview).not.toBeNull();

        const checkReview = await Review.findById(reviewToDelete._id);
        expect(checkReview).toBeNull();
      });

      it('should retrieve a specific review from the database', async () => {
        const mockReview = mockReviews[1];
        const newReview = await Review.create(mockReview);
        const retrievedReview = await Review.findById(newReview._id);

        expect(retrievedReview).not.toBeNull();
        expect(retrievedReview).toMatchObject(mockReview);
      });
});
