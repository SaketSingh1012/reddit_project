// function findTop5TopicsWithMostPosts(data) {
//   const topicCounts = {};

//   data.forEach((post) => {
//     const { topicId } = post;
//     if (topicCounts[topicId] === undefined) {
//       topicCounts[topicId] = 1;
//     } else {
//       topicCounts[topicId] += 1;
//     }
//   });

//   const sortedTopics = Object.keys(topicCounts).sort(
//     (a, b) => topicCounts[b] - topicCounts[a],
//   );

//   const top5Topics = sortedTopics.slice(0, 5);

//   return top5Topics;
// }

// module.exports = findTop5TopicsWithMostPosts;

function findTop5TopicsWithMostPosts(data) {
  const topicCounts = data.reduce((counts, post) => {
    const { topicId } = post;
    const newCounts = { ...counts };
    newCounts[topicId] = (newCounts[topicId] || 0) + 1;
    return newCounts;
  }, {});

  const sortedTopics = Object.keys(topicCounts).sort(
    (a, b) => topicCounts[b] - topicCounts[a],
  );

  const top5Topics = sortedTopics.slice(0, 5);

  return top5Topics;
}

module.exports = findTop5TopicsWithMostPosts;
