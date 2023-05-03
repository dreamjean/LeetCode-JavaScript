/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
  const n = A.length;
  const count = new Array(n + 1).fill(0);
  const ans = new Array(n).fill(0);
  let cnt = 0;
  
  for (let i = 0; i < n; i++) {
    if (++count[A[i]] === 2) cnt++;
    if (++count[B[i]] === 2) cnt++;
    
    ans[i] = cnt;
  }
  
  return ans;
};