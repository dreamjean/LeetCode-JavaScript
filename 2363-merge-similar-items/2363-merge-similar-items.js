/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
  const map = {};
  
  items1.forEach(([value, weight]) => map[value] ? map[value] += weight : map[value] = weight);
  items2.forEach(([value, weight]) => map[value] ? map[value] += weight : map[value] = weight);
  
  return [...Object.entries(map)];
};