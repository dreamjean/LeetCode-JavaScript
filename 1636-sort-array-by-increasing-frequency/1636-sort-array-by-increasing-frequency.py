/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
  const map = {};
  
  nums.forEach((num) => map[num] ? map[num]++ : map[num] = 1);
  
  return Object
    .entries(map)
    .sort((a, b) => a[1] === b[1] ? +b[0] - +a[0] : a[1] - b[1])
    .reduce((acc, [a, b]) => {
      while (b--) acc.push(+a);
      return acc;
    }, []) 
};