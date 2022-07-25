/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function (n, headID, manager, informTime) {
  let ans = 0;

  for (let i = 0; i < n; i++) ans = Math.max(ans, dfs(i, manager, informTime));

  return ans;
};

const dfs = (i, manager, informTime) => {
  if (manager[i] !== -1) {
    informTime[i] += dfs(manager[i], manager, informTime);
    manager[i] = -1;
  }

  return informTime[i];
};
