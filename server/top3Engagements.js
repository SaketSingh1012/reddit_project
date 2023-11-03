function findTop3EngagedTopics(votes, posts) {
  const topicEngagement = {};

  posts.forEach((post) => {
    const postId = post.id;
    const postVotes = votes.filter((vote) => vote.postId === postId);
    const { topicId } = post;

    if (!topicEngagement[topicId]) {
      topicEngagement[topicId] = 0;
    }

    postVotes.forEach(() => {
      topicEngagement[topicId] += 1;
    });
  });

  const sortedTopics = Object.keys(topicEngagement).sort(
    (a, b) => topicEngagement[b] - topicEngagement[a],
  );

  const top3Topics = sortedTopics.slice(0, 3);

  return top3Topics;
}

module.exports = findTop3EngagedTopics;
