/* global test, expect */

const findTop3PostsWithHighestScore = require('../server/findTop3PostsWithVotes');

const voteData = [
  { postId: 'post-1', type: 'up' },
  { postId: 'post-1', type: 'up' },
  { postId: 'post-1', type: 'down' },
  { postId: 'post-2', type: 'up' },
  { postId: 'post-2', type: 'down' },
  { postId: 'post-3', type: 'up' },
  { postId: 'post-3', type: 'up' },
  { postId: 'post-3', type: 'up' },
  { postId: 'post-4', type: 'down' },
  { postId: 'post-4', type: 'up' },
  { postId: 'post-4', type: 'up' },
  { postId: 'post-5', type: 'down' },
  { postId: 'post-5', type: 'up' },
  { postId: 'post-5', type: 'down' },
  { postId: 'post-6', type: 'down' },
  { postId: 'post-6', type: 'up' },
  { postId: 'post-6', type: 'up' },
  { postId: 'post-6', type: 'down' },
];

test('Find the top 3 post with most votes', () => {
  const result = findTop3PostsWithHighestScore(voteData);
  expect(result).toEqual([
    ['post-3', 3],
    ['post-1', 1],
    ['post-4', 1],
  ]);
});
