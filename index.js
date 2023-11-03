const fs = require('fs');
const post = require('./reddit-dataset/posts.json');
const vote = require('./reddit-dataset/votes.json');

// Find the top 3 posts with the highest score.
const findTop3PostsWithHighestScore = require('./server/findTop3PostsWithVotes');

const totalVotes = findTop3PostsWithHighestScore(vote);
fs.writeFileSync(
  './output/findTop3PostsWithVotes.json',
  JSON.stringify(totalVotes, null, 2),
);

// Find the top 5 topics associated with the most number of posts
const findTop5TopicsWithMostPosts = require('./server/top5PostsTopics');

const topicsWithMostPosts = findTop5TopicsWithMostPosts(post);
fs.writeFileSync(
  './output/top5PostsTopics.json',
  JSON.stringify(topicsWithMostPosts, null, 2),
);

// Find the top 5 most active users. A user gets 5 points each time they create a post
const findTop5MostActiveUsers = require('./server/top5ActiveUsers');

const top5Users = findTop5MostActiveUsers(post, vote);
fs.writeFileSync(
  './output/top5ActiveUsers.json',
  JSON.stringify(top5Users, null, 2),
);

// Find the top 5 users who have created the most number of posts
const findTop5UsersWithMostPosts = require('./server/top5PostCreaterUsers');

const top5PostUsers = findTop5UsersWithMostPosts(post);
fs.writeFileSync(
  './output/top5PostCreaterUsers.json',
  JSON.stringify(top5PostUsers, null, 2),
);

// Find the top 3 topics which have received the most engagement
const findTop3EngagedTopics = require('./server/top3Engagements');

const top3Topics = findTop3EngagedTopics(vote, post);
fs.writeFileSync(
  './output/top3Engagements.json',
  JSON.stringify(top3Topics, null, 2),
);
