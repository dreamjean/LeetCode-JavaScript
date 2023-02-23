/**
 * @param {number} n
 * @param {number} start
 * @return {number[]}
 */
var circularPermutation = function(n, start) {
  const p = [];
  
  for (let i = 0; i < 1 << n; i++) 
    p.push(start ^ i ^ i >> 1)
  
  return p;
};