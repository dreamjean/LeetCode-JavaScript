/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
  nums.sort((a, b) => b - a);
  let [l, r] = [0, Math.max(...nums)];
  
  while (l <= r) {
    const mid = (l + r) >>> 1;
    const x = findSpecial(nums, mid);
    if (x === mid) return x;
    
    if (x > mid) l = mid + 1;
    else r = mid - 1;
  }
  
  return -1;
};

const findSpecial = (nums, mid) => nums.reduce((acc, curr) => acc + (curr >= mid), 0);