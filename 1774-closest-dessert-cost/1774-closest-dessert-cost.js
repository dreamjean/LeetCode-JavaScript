/**
 * @param {number[]} baseCosts
 * @param {number[]} toppingCosts
 * @param {number} target
 * @return {number}
 */
var closestCost = function(baseCosts, toppingCosts, target) {
  let ans = Infinity;
  
  const dp = (cost, start = 0) => {
    if (cost >= target || start === toppingCosts.length) {
      const [before, now] = [Math.abs(ans - target), Math.abs(cost - target)];
      if (now < before) ans = cost;
      else if (now === before) ans = Math.min(ans, cost);
      return;
    }
    
    for (let j = 0; j <= 2; j++) {
      dp(cost + j * toppingCosts[start], start + 1);
    }
  }
  
  baseCosts.forEach((cost) => dp(cost));
  
  return ans;
};