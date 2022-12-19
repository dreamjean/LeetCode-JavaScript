/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function(nums, maxOperations) {
  let [low, high] = [1, Math.max(...nums)];
  
  while (low < high) {
    const mid = (low + high) >>> 1;
    const count = getCount(nums, mid);
    if (count > maxOperations) low = mid + 1;
    else high = mid;
  }
  
  return low;
};

const getCount = (nums, mid) => nums.reduce((acc, num) => acc + Math.floor((num - 1) / mid), 0);