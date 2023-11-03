function calculateTotalVotes(votes) {
  let totalUpvotes = 0;
  let totalDownvotes = 0;

  votes.forEach((vote) => {
    if (vote.type === "up") {
      totalUpvotes++;
    } else {
      totalDownvotes++;
    }
  });

  const totalVotes = totalUpvotes - totalDownvotes;
  return totalVotes;
}

module.exports = calculateTotalVotes;
