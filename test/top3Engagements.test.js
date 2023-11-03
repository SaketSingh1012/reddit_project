const findTop3EngagedTopics = require('../server/top3Engagements');

const voteData = [
  { type: 'up', postId: 'post-1' },
  { type: 'up', postId: 'post-2' },
  { type: 'down', postId: 'post-3' },
  { type: 'up', postId: 'post-1' },
  { type: 'down', postId: 'post-2' },
];

const postData = [
  { id: 'post-1', topicId: 'topic-1' },
  { id: 'post-2', topicId: 'topic-2' },
  { id: 'post-3', topicId: 'topic-1' },
  { id: 'post-4', topicId: 'topic-3' },
];

test('Find the top 3 engaged topics', () => {
  const result = findTop3EngagedTopics(voteData, postData);

  expect(result).toEqual(['topic-1', 'topic-2', 'topic-3']);
});
