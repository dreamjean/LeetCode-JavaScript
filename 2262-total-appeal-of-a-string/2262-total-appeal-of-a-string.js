/**
 * @param {string} s
 * @return {number}
 */
var appealSum = function(s) {
  const last = new Array(26).fill(-1);
  const n = s.length;
  let ans = 0;
  
  for (let i = 0; i < n; i++) {
    const key = s.charCodeAt(i) - 'a'.charCodeAt();
    ans += (i - last[key]) * (n - i);
    last[key] = i;    
  }

  return ans;
};