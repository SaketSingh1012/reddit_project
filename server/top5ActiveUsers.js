// function findTop5MostActiveUsers(posts, votes) {
//   const userScores = {};

//   posts.forEach((post) => {
//     const { userId } = post;

//     if (!userScores[userId]) {
//       userScores[userId] = 5;
//     } else {
//       userScores[userId] += 5;
//     }
//   });

//   votes.forEach((vote) => {
//     const { userId } = vote;

//     if (userScores[userId] !== undefined) {
//       userScores[userId] += 1;
//     }
//   });

//   const sortedUsers = Object.keys(userScores).sort(
//     (a, b) => userScores[b] - userScores[a],
//   );

//   const top5Users = sortedUsers.slice(0, 5);
//   return top5Users;
// }

// module.exports = findTop5MostActiveUsers;

function findTop5MostActiveUsers(posts, votes) {
  const userScores = posts.reduce((scores, post) => {
    const { userId } = post;
    const newScores = { ...scores };
    newScores[userId] = (newScores[userId] || 0) + 5;
    return newScores;
  }, {});

  votes.forEach((vote) => {
    const { userId } = vote;
    if (userScores[userId] !== undefined) {
      userScores[userId] += 1;
    }
  });

  const sortedUsers = Object.keys(userScores).sort(
    (a, b) => userScores[b] - userScores[a],
  );

  const top5Users = sortedUsers.slice(0, 5);
  return top5Users;
}

module.exports = findTop5MostActiveUsers;
