const mongoose = require('mongoose');
const Follow = require('../../models/Follow');
const testSetup = require('../testSetup');

const mockFollows = [
  {
    follower: '60cfe8c92a501e001c34a2a3',
    following: '60cfe8da2a501e001c34a2a4'
  },
  {
    follower: '60cfe8b52a501e001c34a2a2',
    following: '60cfe8a12a501e001c34a2a1'
  }
];

testSetup.setUp();

describe('Follow Model Tests', () => {
  it('should add a new follow record', async () => {
    const mockFollow = mockFollows[0];
    const newFollow = await Follow.create(mockFollow);

    expect(newFollow).toBeDefined();
    expect(newFollow._id).toBeDefined();
    expect(newFollow).toMatchObject(mockFollow);
  });

  it('should retrieve all records from the database', async () => {
    const newRecords = await Follow.create(mockFollows);
    const records = await Follow.find();

    expect(records.length).toBeGreaterThan(0);
    expect(records.length).toBe(2);
    expect(records).toEqual(expect.arrayContaining(newRecords));
  });

  it('should retrieve a specific user\'s record from the database', async () => {
    const mockFollow = mockFollows[1];
    const newFollow = await Follow.create(mockFollow);
    const followsOfUser = await Follow.find({ follower: mockFollow.follower });

    expect(followsOfUser).toBeDefined();
    expect(followsOfUser.length).toBe(1);
    expect(followsOfUser[0]).toMatchObject(newFollow);
  });

  it('should delete a follow by user\'s ID from the database', async () => {
    const mockFollow = mockFollows[0];
    await Follow.create(mockFollows);
    const deleteFollow = await Follow.findOneAndDelete({ follower: mockFollow.follower });

    expect(deleteFollow).toBeNull();
  });
});
