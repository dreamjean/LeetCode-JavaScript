/**
 * @param {number[]} arr
 * @return {number}
 */
var oddEvenJumps = function(arr) {
  const sortedIdxes = getIndexes(arr).sort((a, b) => arr[a] === arr[b] ? a - b : arr[a] - arr[b]);
  const reverseSortedIdxes = getIndexes(arr).sort((a, b) => arr[a] === arr[b] ? a - b : arr[b] - arr[a]);
  const n = arr.length;
  const oddJumps = getNextJumps(getInitArr(n), sortedIdxes);
  const evenJumps = getNextJumps(getInitArr(n), reverseSortedIdxes);
  const higher = getInitArr(n);
  const lower = getInitArr(n);
  higher[n - 1] = 1;
  lower[n - 1] = 1;

  for (let i = n - 2; i >= 0; i--) {
    higher[i] = lower[oddJumps[i]];
    lower[i] = higher[evenJumps[i]];
  }

  return higher.reduce((a, b) => a + b);
};

const getIndexes = (arr) => arr.map((_, i) => i);

const getInitArr = (n) => new Array(n).fill(0);

const getNextJumps = (nums, indexes) => {
  const stack = [];
  
  for (let i of indexes) {
    while (stack.length && stack.at(-1) < i) {
      const j = stack.pop();
      nums[j] = i;
    }
    
    stack.push(i);
  }
  
  return nums;
}