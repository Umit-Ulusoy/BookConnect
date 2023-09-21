const mongoose = require('mongoose');
const testDatabase = require('../testDatabase');
const Review = require('../../models/Review');

beforeAll(async () => testDatabase.connectToDatabase());
afterEach(async () => testDatabase.clearDatabase());
afterAll(asyn () => testDatabase.closeDatabase());

descripe('Review model tests', () => {
    it('should save a new review to the database', async () => {
        
    });
});