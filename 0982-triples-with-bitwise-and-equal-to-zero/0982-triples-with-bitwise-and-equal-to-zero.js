/**
 * @param {number[]} nums
 * @return {number}
 */
var countTriplets = function(nums) {
  const count = new Array(1 << 16).fill(0);
  let ans = 0;
  
  for (let a of nums) {
    for (let b of nums) {
      count[a & b]++;
    }
  }
  
  for (let num of nums) {
    for (let i = 0; i < 1 << 16; i++) {
      if (!(num & i)) ans += count[i];
    }
  }
  
  return ans;
};