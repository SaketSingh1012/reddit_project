/* global test, expect */

const findTop5UsersWithMostPosts = require('../server/top5PostCreaterUsers');

const postData = [
  { userId: 'user-1' },
  { userId: 'user-2' },
  { userId: 'user-1' },
  { userId: 'user-3' },
  { userId: 'user-2' },
  { userId: 'user-1' },
  { userId: 'user-3' },
  { userId: 'user-4' },
  { userId: 'user-5' },
  { userId: 'user-6' },
  { userId: 'user-7' },
  { userId: 'user-7' },
  { userId: 'user-8' },
  { userId: 'user-8' },
  { userId: 'user-8' },
  { userId: 'user-9' },
  { userId: 'user-9' },
  { userId: 'user-9' },
  { userId: 'user-9' },
];
const userData = [
  { id: 'user-1' },
  { id: 'user-2' },
  { id: 'user-3' },
  { id: 'user-4' },
  { id: 'user-5' },
  { id: 'user-6' },
  { id: 'user-7' },
  { id: 'user-8' },
  { id: 'user-9' },
];

test('Find the top 5 users with the most posts', () => {
  const result = findTop5UsersWithMostPosts(postData, userData);
  expect(result).toEqual(['user-9', 'user-1', 'user-8', 'user-2', 'user-3']);
});
