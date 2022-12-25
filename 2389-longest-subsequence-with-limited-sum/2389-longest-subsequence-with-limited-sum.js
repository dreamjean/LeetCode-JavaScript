/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
  const sums = nums
    .sort((a, b) => a - b)
    .reduce((acc, curr, i) => (acc.push(!i ? curr : curr + acc.at(-1)), acc), []);
  
  return queries.map((q) => search(sums, q));
};

const search = (sums, query) => {
  let [l, r] = [0, sums.length - 1];
  
  while (l <= r) {
    const mid = (l + r) >>> 1;
    if (sums[mid] > query) r = mid - 1;
    else l = mid + 1;
  }
  
  return l;
}