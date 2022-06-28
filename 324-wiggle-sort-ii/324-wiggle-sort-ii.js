/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    nums.sort((a, b) => a - b);
    const sort = [...nums];
    const n = nums.length;
    let [k, low, high] = [0, (n - 1) >> 1, n - 1];
    
    while (k < n) {
        nums[k++] = (k & 1) ? sort[low--] : sort[high--];
    }
};