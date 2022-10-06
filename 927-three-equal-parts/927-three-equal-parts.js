/**
 * @param {number[]} arr
 * @return {number[]}
 */
var threeEqualParts = function(arr) {
  const ones = arr.reduce((a, b) => a + b);
  
  if (!ones) return [0, 2];
  if (ones % 3) return [-1, -1];
  
  const n = arr.length;
  let [x, k] = [ones / 3, n];
  while (x > 0) if (arr[--k] === 1) --x;
  
  const path = n - k;
  const firstOne = arr.indexOf(1);
  const secondOne = arr.indexOf(1, firstOne + path);

  for (let i = 0; i < path; i++) {
    if (arr[i + firstOne] !== arr[i + k] || arr[i + secondOne] !== arr[i + k])
      return [-1, -1];
  }
  
  return [firstOne + path - 1, secondOne + path];
};