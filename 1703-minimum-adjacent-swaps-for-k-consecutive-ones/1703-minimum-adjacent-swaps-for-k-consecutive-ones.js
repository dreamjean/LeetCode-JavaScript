/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minMoves = function(nums, k) {
  const pos = nums.reduce((acc, num, i) => (num && acc.push(i), acc), []);
  let [mid, count] = [Math.floor(k / 2), 0];
  
  for (let i = 1; i < k; i++)
    count += (pos[i] - pos[i - 1] - 1) * Math.min(i, k - i)
  
  let ans = count;
  
  for (let i = k; i < pos.length; i++) {
    count += pos[i] - pos[i - mid] - (pos[i - k + mid] - pos[i - k])
    ans = Math.min(ans, count);
  }
  
  return ans;
};