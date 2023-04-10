/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
  let [fruitA, fruitB, countB, currMax, ans] = [-1, -1, 0, 0, 0];
  
  for (let fruit of fruits) {
    currMax = (fruit === fruitA || fruit === fruitB) ? currMax + 1 : countB + 1;   
    fruit === fruitB ? ++countB : countB = 1;    
    if (fruit !== fruitB) [fruitA, fruitB] = [fruitB, fruit];
    
    ans = Math.max(ans, currMax);
  }
  
  return ans;
};