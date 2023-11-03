function findTop5UsersWithMostPosts(posts) {
  const userPostCounts = {};

  posts.forEach((post) => {
    const { userId } = post;

    if (userPostCounts[userId] === undefined) {
      userPostCounts[userId] = 1;
    } else {
      userPostCounts[userId] += 1;
    }
  });

  const sortedUsers = Object.keys(userPostCounts).sort(
    (a, b) => userPostCounts[b] - userPostCounts[a],
  );

  const top5Users = sortedUsers.slice(0, 5);

  return top5Users;
}

module.exports = findTop5UsersWithMostPosts;
