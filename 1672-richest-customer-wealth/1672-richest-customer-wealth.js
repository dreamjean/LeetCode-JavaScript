/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  return accounts.reduce(
    (acc, curr) =>
      Math.max(
        acc,
        curr.reduce((a, b) => a + b)
      ),
    0
  );
};
