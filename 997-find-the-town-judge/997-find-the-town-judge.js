/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  const indegree = new Array(n + 1).fill(0);

  for (const [a, b] of trust) {
    --indegree[a];
    ++indegree[b];
  }

  return indegree.reduce((acc, curr, i) => (curr === n - 1 ? (acc = i) : acc), -1);
};
