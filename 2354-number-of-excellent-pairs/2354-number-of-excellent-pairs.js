/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countExcellentPairs = function(nums, k) {
  const count = new Array(30).fill(0);
  const set = new Set(nums);
  let ans = 0;
  
  set.forEach((num) => ++count[bitCount(num)]);
  
  for (let i = 0; i < 30; i++) {
    for (let j = 0; j < 30; j++) {
      if (i + j >= k) ans += count[i] * count[j];
    }
  }
  
  return ans;
};

const bitCount = (num) => {
  let ans = 0;
  
  while (num) {
    ans += (num & 1);
    num >>= 1;
  }
  
  return ans;
}