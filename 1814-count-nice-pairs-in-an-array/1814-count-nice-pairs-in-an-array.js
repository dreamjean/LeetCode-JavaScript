/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function(nums) {
  const map = {};
  const mod = 1e9 + 7;
  
  for (let num of nums) {
    const diff = num - rev(num);
    map[diff] ? map[diff]++ : map[diff] = 1;
  }
  
  return Object.values(map).reduce((acc, curr) => (acc + Math.floor((curr - 1) * curr / 2)) % mod, 0);
};

const rev = (num) => {
  let ans = 0;
  
  while (num) {
    ans = ans * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  
  return ans;
}