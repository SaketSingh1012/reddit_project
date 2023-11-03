const fs = require("fs");
const post = require("./reddit-dataset/posts.json");
const vote = require("./reddit-dataset/votes.json");

// the total number of upvotes and subtracting the total number of downvotes
const calculateTotalVotes = require("./server/totalVotes");
const totalVotes = calculateTotalVotes(vote);
const data = {
  totalNumberOfVotes: totalVotes,
};
fs.writeFileSync("./output/totalVotes.json", JSON.stringify(data, null, 2));

// Find the top 5 topics associated with the most number of posts
const findTop5TopicsWithMostPosts = require("./server/top5PostsTopics");
const topicsWithMostPosts = findTop5TopicsWithMostPosts(post);
fs.writeFileSync(
  "./output/top5PostsTopics.json",
  JSON.stringify(topicsWithMostPosts, null, 2)
);

// Find the top 5 most active users. A user gets 5 points each time they create a post. And then they get 1 point per each upvote / downvote
const findTop5MostActiveUsers = require("./server/top5ActiveUsers");
const top5Users = findTop5MostActiveUsers(post, vote);
fs.writeFileSync(
  "./output/top5ActiveUsers.json",
  JSON.stringify(top5Users, null, 2)
);

// Find the top 5 users who have created the most number of posts
const findTop5UsersWithMostPosts = require("./server/top5PostCreaterUsers");
const top5PostUsers = findTop5UsersWithMostPosts(post);
fs.writeFileSync(
  "./output/top5PostCreaterUsers.json",
  JSON.stringify(top5PostUsers, null, 2)
);

// Find the top 3 topics which have received the most engagement. Engagement for a particular topic is calculated by the calculating the sum of the number of upvotes / downvotes received by all posts belonging to that topic
const findTop3EngagedTopics = require("./server/top3Engagements");
const top3Topics = findTop3EngagedTopics(vote, post);
fs.writeFileSync(
  "./output/top3Engagements.json",
  JSON.stringify(top3Topics, null, 2)
);
