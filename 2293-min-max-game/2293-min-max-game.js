/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function(nums) {
  const n = nums.length;
  
  if (n === 1) return nums[0];
  
  const newNums = nums.reduce((acc, _, i) => {
    const [even, odd] = [nums[i * 2], nums[i * 2 + 1]];
    if (i < n / 2) acc.push(i & 1 ? Math.max(even, odd) : Math.min(even, odd));
    
    return acc;
  }, []);
  
  return minMaxGame(newNums);
};