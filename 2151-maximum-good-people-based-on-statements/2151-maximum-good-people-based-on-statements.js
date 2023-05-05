/**
 * @param {number[][]} statements
 * @return {number}
 */
var maximumGood = function(statements) {
  const n = statements.length;
  let ans = 0;
  
  for (let mask = 1; mask < 1 << n; mask++) {
    let [flag, cnt] = checkGoodCount(statements, n, mask);
    if (flag && cnt > ans) ans = cnt;
  }
  
  return ans;
};

const checkGoodCount = (statements, n, mask) => {
  let cnt = 0;
  
  for (let i = 0; i < n; i++) {
    if (!(mask >> i & 1)) continue;
    
    for (let j = 0; j < n; j++) {
      const num = statements[i][j];
      if (num < 2 && num !== (mask >> j & 1)) return [false, 0];
    }
    
    cnt++;
  }
  
  return [true, cnt];
}