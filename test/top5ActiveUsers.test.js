const findTop5MostActiveUsers = require("../server/top5ActiveUsers");

const postData = [
  { userId: "user-1", id: "post-1" },
  { userId: "user-2", id: "post-2" },
  { userId: "user-1", id: "post-3" },
  { userId: "user-3", id: "post-4" },
  { userId: "user-2", id: "post-5" },
  { userId: "user-1", id: "post-6" },
  { userId: "user-3", id: "post-7" },
  { userId: "user-4", id: "post-8" },
  { userId: "user-5", id: "post-9" },
  { userId: "user-5", id: "post-10" },
  { userId: "user-5", id: "post-11" },
  { userId: "user-6", id: "post-12" },
  { userId: "user-6", id: "post-13" },
  { userId: "user-7", id: "post-14" },
];

const voteData = [
  { postId: "post-1", type: "up" },
  { postId: "post-2", type: "up" },
  { postId: "post-3", type: "down" },
  { postId: "post-4", type: "up" },
  { postId: "post-5", type: "up" },
  { postId: "post-6", type: "down" },
  { postId: "post-7", type: "down" },
  { postId: "post-8", type: "up" },
  { postId: "post-9", type: "down" },
  { postId: "post-10", type: "up" },
  { postId: "post-11", type: "up" },
  { postId: "post-12", type: "down" },
  { postId: "post-13", type: "down" },
  { postId: "post-14", type: "down" },
  { postId: "post-15", type: "up" },

];

test("Find the top 5 most active users", () => {
  const result = findTop5MostActiveUsers(postData, voteData);
  expect(result).toEqual(["user-1", "user-5", "user-2", "user-3", "user-6"]);
});
