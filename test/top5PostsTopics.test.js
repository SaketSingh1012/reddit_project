/* global test, expect */

const findTop5TopicsWithMostPosts = require('../server/top5PostsTopics');

const postData = [
  { topicId: 'topic-1' },
  { topicId: 'topic-2' },
  { topicId: 'topic-1' },
  { topicId: 'topic-3' },
  { topicId: 'topic-2' },
  { topicId: 'topic-1' },
  { topicId: 'topic-3' },
  { topicId: 'topic-4' },
  { topicId: 'topic-5' },
];

test('Find the top 5 topics with the most posts', () => {
  const result = findTop5TopicsWithMostPosts(postData);

  expect(result).toEqual([
    'topic-1',
    'topic-2',
    'topic-3',
    'topic-4',
    'topic-5',
  ]);
});
