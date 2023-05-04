/**
 * @param {number[][]} fruits
 * @param {number} startPos
 * @param {number} k
 * @return {number}
 */
var maxTotalFruits = function(fruits, startPos, k) {
  const n = fruits.length;
  let [j, sum, ans] = [0, 0, 0];
  
  for (let [i, [pos, amount]] of fruits.entries()) {
    sum += amount;
    while (j <= i && pos - fruits[j][0] + Math.min(Math.abs(pos - startPos), Math.abs(startPos - fruits[j][0])) > k)
      sum -= fruits[j++][1];
    
    ans = Math.max(ans, sum);
  }
  
  return ans;
};