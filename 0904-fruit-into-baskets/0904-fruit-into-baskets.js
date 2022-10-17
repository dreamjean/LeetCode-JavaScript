/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let [fruitA, fruitB, cntB, currMax, max] = new Array(5).fill(0);

  for (let fruit of fruits) {
    currMax = fruit === fruitA || fruit === fruitB ? currMax + 1 : cntB + 1;
    cntB = fruit === fruitB ? cntB + 1 : 1;

    if (fruit !== fruitB) [fruitA, fruitB] = [fruitB, fruit];
    max = Math.max(max, currMax);
  }

  return max;
};
