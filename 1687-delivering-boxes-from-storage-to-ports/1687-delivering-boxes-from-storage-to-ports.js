/**
 * @param {number[][]} boxes
 * @param {number} portsCount
 * @param {number} maxBoxes
 * @param {number} maxWeight
 * @return {number}
 */
var boxDelivering = function(boxes, portsCount, maxBoxes, maxWeight) {
  const n = boxes.length;
  const dp = new Array(n + 1).fill(Infinity);
  let [need, lastJ, j] = [0, 0, 0];
  dp[0] = 0;
  
  for (let i = 0; i < n; i++) {
    while (j < n && maxBoxes > 0 && maxWeight >= boxes[j][1]) {
      maxBoxes--;
      maxWeight -= boxes[j][1];
      
      if (!j || boxes[j][0] !== boxes[j - 1][0]) {
        lastJ = j;
        need++;
      }
      
      j++;
    }
    
    dp[j] = Math.min(dp[j], dp[i] + need + 1);
    dp[lastJ] = Math.min(dp[lastJ], dp[i] + need);
    
    maxBoxes++;
    maxWeight += boxes[i][1];
    
    if (i === n - 1 || boxes[i][0] !== boxes[i + 1][0]) need--;
  }
  
  return dp[n];
};