/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
  const map = {};
  const n = arr.length;
  let count = 0;
  
  arr.forEach(num => map[num] ? map[num]++ : map[num] = 1);
  
  return Object
    .values(map)
    .sort((a, b) => b - a)
    .reduce(
      (acc, curr) => {
        if (acc[0] < n / 2) {
          acc[0] += curr;
          acc[1]++;
        }
        return acc;       
      },
      [0, 0]
    )[1]
};