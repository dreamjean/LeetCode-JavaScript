/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  const n = nums.length;
  const last = n - k;
  let [l, r] = [0, n - 1];
  
  while (l <= r) {
    const pivot = partition(nums, l, r);
    if (pivot === last) return nums[pivot];
    if (pivot < last) l = pivot + 1;
    else r = pivot - 1;
  }
};

const swap = (nums, i, j) => [nums[i], nums[j]] = [nums[j], nums[i]];

const partition = (nums, start, end) => {
  const pivot = nums[end];
  let [l, r] = [start, end - 1];
  
  while (l <= r) {
    while (nums[l] < pivot) l++;
    while (nums[r] > pivot) r--;
    
    if (l <= r) {
      swap(nums, l, r);
      l++;
      r--;
    }
  }
  
  swap(nums, l, end);
  
  return l;
}