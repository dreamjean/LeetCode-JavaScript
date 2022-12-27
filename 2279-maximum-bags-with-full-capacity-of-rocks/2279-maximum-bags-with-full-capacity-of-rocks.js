/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
  return capacity
    .map((num, i) => num - rocks[i])
    .sort((a, b) => a - b)
    .reduce((acc, curr) => {
      if (curr <= additionalRocks) {
        additionalRocks -= curr;
        acc++;
      }
    
      return acc;
    }, 0)
};