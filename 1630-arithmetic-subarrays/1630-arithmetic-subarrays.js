/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
  const n = l.length;
  const ans = [];
  
  for (let i = 0; i < n; i++) {
    const sub = nums.slice(l[i], r[i] + 1);
    ans.push(isArithmeticSubarray(sub));
  }
  
  return ans;
};
  
const isArithmeticSubarray = (arr) => {
  arr.sort((a, b) => a - b);
  const diff = arr[1] - arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== diff) return false;
  }
  
  return true;
}