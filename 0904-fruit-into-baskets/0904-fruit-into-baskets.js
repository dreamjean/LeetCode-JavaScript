/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
  let [fruitA, fruitB, currA, currB, currMax, max] = [-1, -1, 0, 0, 0, 0];
  
  for (let fruit of fruits) {
    currMax = fruit === fruitA || fruit === fruitB ? currMax + 1 : currB + 1;
    currB = fruit === fruitB ? currB + 1 : 1;
    if (fruit !== fruitB) [fruitA, fruitB] = [fruitB, fruit];
    
    max = Math.max(max, currMax);
  }
  
  return max;
};