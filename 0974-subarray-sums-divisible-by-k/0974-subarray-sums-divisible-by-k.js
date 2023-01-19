/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
  const count = new Array(k).fill(0);
  let [ans, prefix] = [0, 0];
  count[0] = 1;
  
  for (let num of nums) {
    prefix = (prefix + num % k + k) % k;
    ans += count[prefix]++;
  }
  
  return ans;
};
