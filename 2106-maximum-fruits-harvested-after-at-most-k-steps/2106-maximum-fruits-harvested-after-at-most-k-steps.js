/**
 * @param {number[][]} fruits
 * @param {number} startPos
 * @param {number} k
 * @return {number}
 */
var maxTotalFruits = function(fruits, startPos, k) {
  let [j, sum, ans] = [0, 0, 0];
  
  fruits.forEach(([pos, amount], i) => {
    sum += amount;
    while (
      j <= i && Math.min(
        Math.abs(startPos - pos), Math.abs(startPos - fruits[j][0])
      ) + pos - fruits[j][0] > k
    )
      sum -= fruits[j++][1];
    
    ans = Math.max(ans, sum);
  })
  
  return ans;
};