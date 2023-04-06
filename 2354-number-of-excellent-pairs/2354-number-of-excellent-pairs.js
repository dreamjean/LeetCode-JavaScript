/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countExcellentPairs = function(nums, k) {
  const set = new Set(nums);
  const count = new Array(30).fill(0);
  let ans = 0;
  
  for (let num of set) {
    const cnt = bitCount(num);
    ++count[cnt];
  }
  
  for (let i = 1; i < 30; ++i) {
    for (let j = 1; j < 30; ++j) {
      if (i + j >= k) ans += count[i] * count[j];
    }
  }
  
  return ans;
};

const bitCount = (num) => {
  let count = 0;
  while (num) {
    count += (num & 1);
    num >>= 1;
  }
  
  return count;
}