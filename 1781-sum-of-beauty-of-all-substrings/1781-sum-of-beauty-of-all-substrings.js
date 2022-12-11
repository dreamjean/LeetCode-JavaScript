/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function(s) {
  const n = s.length;
  let ans = 0;
  
  for (let i = 0; i < n; i++) {
    const freq = new Array(26).fill(0);
    let max = 0;
    for (let j = i; j < n; j++) {
      max = Math.max(max, ++freq[s.charCodeAt(j) - 'a'.charCodeAt()]);
      let min = Math.min(...freq.filter((x) => x));
      ans += max - min;
    }
  }
  
  return ans;
};