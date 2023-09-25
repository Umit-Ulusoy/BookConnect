const testDatabase = require('./testDatabase');

exports.setUp =() => {
    // Connect to the database before running tests
beforeAll(async () => testDatabase.connectToDatabase());

// Clear the database after each test
afterEach(async () => testDatabase.clearDatabase());

// Close the database connection after all tests
afterAll(async () => testDatabase.closeDatabase());

}