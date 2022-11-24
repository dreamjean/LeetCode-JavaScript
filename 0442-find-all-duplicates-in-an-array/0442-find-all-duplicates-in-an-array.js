/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  const set = new Set();
  const ans = [];
  
  for (let num of nums) {
    if (set.has(num)) ans.push(num);
    
    set.add(num);
  }
  
  return ans;
};