// function findTop3PostsWithHighestScore(votes) {
//   const ans = {};

//   votes.forEach((vote) => {
//     if (ans[vote.postId]) {
//       if (vote.type === 'up') {
//         ans[vote.postId] += 1;
//       } else {
//         ans[vote.postId] -= 1;
//       }
//     } else if (vote.type === 'up') {
//       ans[vote.postId] = 1;
//     } else {
//       ans[vote.postId] = -1;
//     }
//   });
//   const sortedPosts = Object.entries(ans).sort((a, b) => b[1] - a[1]);
//   const topThreePosts = sortedPosts.slice(0, 3);
//   return topThreePosts;
// }

// module.exports = findTop3PostsWithHighestScore;

function findTop3PostsWithHighestScore(votes) {
  const ans = votes.reduce((result, vote) => {
    const { postId } = vote;
    const type = vote.type === 'up' ? 1 : -1;

    const updatedResult = { ...result };

    updatedResult[postId] = (updatedResult[postId] || 0) + type;
    return updatedResult;
  }, {});

  const sortedPosts = Object.entries(ans).sort((a, b) => b[1] - a[1]);
  const topThreePosts = sortedPosts.slice(0, 3);

  return topThreePosts;
}

module.exports = findTop3PostsWithHighestScore;
