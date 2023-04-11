/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[][]}
 */
var substringXorQueries = function(s, queries) {
  const seen = new Array(30);
  const n = s.length;
  
  for (let i = 0; i < n; i++) {
    if (s[i] === '0') {
      if (!seen[0]) seen[0] = [i, i];
      continue;
    }
    
    let num = 0;
    for (let j = i; j < Math.min(i + 30, n); j++) {
      num = (num << 1) | +s[j];
      if (!seen[num]) seen[num] = [i, j];
    }
  }
  
  return queries.map(([a, b]) => seen[a ^ b] ?? [-1, -1]);
};