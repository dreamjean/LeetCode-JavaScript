/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  const n = nums.length;
  
  if (n === 1) return nums;
  
  const mid = Math.floor(n / 2);
  const left = nums.slice(0, mid);
  const right = nums.slice(mid);
  
  return merge(sortArray(left), sortArray(right));
};

const merge = (left, right) => {
  const ans = [];
  let [l, r] = [0, 0];
  
  while (l < left.length && r < right.length)
    ans.push(left[l] <= right[r] ? left[l++] : right[r++]);
  
  return [...ans, ...left.slice(l), ...right.slice(r)];
}