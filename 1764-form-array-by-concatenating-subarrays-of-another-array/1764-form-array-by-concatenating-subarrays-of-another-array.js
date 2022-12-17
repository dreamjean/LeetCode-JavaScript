/**
 * @param {number[][]} groups
 * @param {number[]} nums
 * @return {boolean}
 */
var canChoose = function(groups, nums) {
  const n = groups.length;
  let [i, start] = [0, 0];
  
  while (i < n && start + groups[i].length <= nums.length) {
    if (search(groups[i], nums, start)) start += groups[i++].length - 1;
    
    start++;
  }
  
  return i === n;
};

const search = (group, nums, start) => !group.some((x, i) => x !== nums[i + start]);