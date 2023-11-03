function findTop5MostActiveUsers(posts, votes) {
  const userScores = {};

  posts.forEach((post) => {
    const userId = post.userId;

    if (userScores[userId] === undefined) {
      userScores[userId] = 5;
    } else {
      userScores[userId] += 5;
    }

    const voteCounts = votes.reduce(
      (count, vote) => {
        if (vote.postId === post.id) {
          if (vote.type === "up") {
            count.upvotes++;
          } else {
            count.downvotes++;
          }
        }
        return count;
      },
      { upvotes: 0, downvotes: 0 }
    );

    userScores[userId] += voteCounts.upvotes + voteCounts.downvotes;
  });

  const sortedUsers = Object.keys(userScores).sort(
    (a, b) => userScores[b] - userScores[a]
  );

  const top5Users = sortedUsers.slice(0, 5);

  return top5Users;
}

module.exports = findTop5MostActiveUsers;
