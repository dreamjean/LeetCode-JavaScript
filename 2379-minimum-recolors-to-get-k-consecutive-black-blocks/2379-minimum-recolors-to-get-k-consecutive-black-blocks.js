/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
  let [cntW, ans] = [0, 100];
  
  for (let i = 0; i < blocks.length; i++) {
    cntW += (blocks[i] === 'W');
    if (i >= k) cntW -= (blocks[i - k] === 'W');
    if (i >= k - 1) ans = Math.min(ans, cntW);
  }
  
  return ans;
};