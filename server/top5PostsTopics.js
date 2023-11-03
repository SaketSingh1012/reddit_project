function findTop5TopicsWithMostPosts(data) {
  const topicCounts = {};

  data.forEach((post) => {
    const topicId = post.topicId;
    if (topicCounts[topicId] === undefined) {
      topicCounts[topicId] = 1;
    } else {
      topicCounts[topicId]++;
    }
  });

  const sortedTopics = Object.keys(topicCounts).sort(
    (a, b) => topicCounts[b] - topicCounts[a]
  );

  const top5Topics = sortedTopics.slice(0, 5);

  return top5Topics;
}

module.exports = findTop5TopicsWithMostPosts;