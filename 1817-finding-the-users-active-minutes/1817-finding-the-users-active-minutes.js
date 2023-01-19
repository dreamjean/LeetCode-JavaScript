/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function(logs, k) {
  const ans = new Array(k).fill(0);
  const map = {};
  
  logs.forEach(([id, time]) => map[id] ? map[id].add(time) : map[id] = new Set([time]));
  
  Object.values(map).forEach((nums) => ans[nums.size - 1]++);
  
  return ans;
};