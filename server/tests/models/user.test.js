const mongoose = require('mongoose');
const testDatabase = require('../testDatabase');
const User = require('../../models/User');

// Mock user data
const mockUsers = [
  {
    firstName: "John",
    lastName: "Doe",
    profilePhoto: "profile1.jpg",
    biography: "Avid reader and writer.",
    username: "johndoe",
    email: "john@example.com",
    password: "secure123",
  },
  {
    firstName: "Alice",
    lastName: "Smith",
    profilePhoto: "profile2.jpg",
    biography: "Book lover and blogger.",
    username: "alicesmith",
    email: "alice@example.com",
    password: "password123",
  }
];

// Connect to the database before running tests
beforeAll(async () => testDatabase.connectToDatabase());

// Clear the database after each test
afterEach(async () => testDatabase.clearDatabase());

// Close the database connection after all tests
afterAll(async () => testDatabase.closeDatabase());

describe('User Model Tests', () => {
    it('Should retrieve all users from the database', async () => {
        // Add mock users to the database
        await User.create(mockUsers);

        // Retrieve all users
        const users = await User.find();

        expect(users).toHaveLength(2);
        expect(users[0]._id).toBeDefined();
        expect(users[0].firstName).toBeDefined();
        expect(users[0].lastName).toBeDefined();
        expect(users[0].email).toBeDefined();
        expect(users[0].username).toBeDefined();
        expect(users[0].password).toBeDefined();
        expect(users[0].createdAt).toBeDefined();
    });

    it('Should retrieve no data from the database', async () => {
        // Retrieve all data from the database
        const users = await User.find();

        expect(users).toHaveLength(0);
    });

    it('Should retrieve a specific user from the database', async () => {
        // Add a mock user to the database
        const mockUser = mockUsers[0];
        const newUser = await User.create(mockUser);

        // Retrieve the added user
        const user = await User.findOne({ _id: newUser._id });

        expect(user._id).toBeDefined();
        expect(user.firstName).toBe(newUser.firstName);
        expect(user.lastName).toBe(newUser.lastName);
        expect(user.profilePhoto).toBe(newUser.profilePhoto);
        expect(user.biography).toBe(newUser.biography);
        expect(user.email).toBe(newUser.email);
        expect(user.username).toBe(newUser.username);
        expect(user.password).toBe(newUser.password);
        expect(user.createdAt).toBeDefined();
    });

    it('Should delete a specific user from the database', async () => {
        // Add a mock user to the database
        const mockUser = mockUsers[1];
        const newUser = await User.create(mockUser);

        // Delete the user
        const isDeleted = await User.deleteOne({ _id: newUser._id });

        expect(isDeleted).toBeTruthy();
    });

    it('Should save a new user to the database', async () => {
        // Mock bir kullanıcı oluşturun ve veritabanına kaydedin
        const mockUser = mockUsers[0];
        const savedUser = await User.create(mockUser);
    
        expect(savedUser._id).toBeDefined();
        expect(savedUser.firstName).toBe(mockUser.firstName);
        expect(savedUser.lastName).toBe(mockUser.lastName);
        expect(savedUser.profilePhoto).toBe(mockUser.profilePhoto);
        expect(savedUser.biography).toBe(mockUser.biography);
        expect(savedUser.email).toBe(mockUser.email);
        expect(savedUser.username).toBe(mockUser.username);
        expect(savedUser.password).toBe(mockUser.password);
        expect(savedUser.createdAt).toBeDefined();
    });
    
});
