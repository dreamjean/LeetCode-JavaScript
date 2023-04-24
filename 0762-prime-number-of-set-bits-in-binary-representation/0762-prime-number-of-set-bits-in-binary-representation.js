/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
  const set = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
  let ans = 0;
  
  while (left <= right)
    ans += set.has(bitCount(left++));
  
  return ans;
};

const bitCount = (num) => {
  let cnt = 0;
  
  while (num) {
    cnt += num & 1;
    num >>= 1;
  }
  
  return cnt;
}