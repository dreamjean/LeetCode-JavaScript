/**
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function(label) {
  const ans = [label];
  let leave = 0;
  
  while (~~(label /= 2)) ++leave;
  
  for (let i = leave - 1; i >= 0; --i) {
    const sum = 2 ** i + 2 ** (i + 1) - 1;
    const val = ~~(ans[0] / 2);
    ans.unshift(sum - val);
  }
  
  return ans;
};