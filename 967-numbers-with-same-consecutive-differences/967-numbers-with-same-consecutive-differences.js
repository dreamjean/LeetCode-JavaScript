/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function(n, k) {
  let list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  while (--n) {
    const curr = [];
    for (let x of list) {
      y = x % 10;
      if (y + k < 10) curr.push(x * 10 + y + k);
      if (k && y - k >= 0) curr.push(x * 10 + y - k);
    }
    
    list = [...curr];
  }
  
  return list;
};