const calculateTotalVotes = require("../server/totalVotes");

const votesData = [
  { type: "up" },
  { type: "up" },
  { type: "down" },
  { type: "up" },
  { type: "down" },
  { type: "up" },
  { type: "down" },
];

test("Calculate the total votes", () => {
  const result = calculateTotalVotes(votesData);

  expect(result).toBe(1);
});
