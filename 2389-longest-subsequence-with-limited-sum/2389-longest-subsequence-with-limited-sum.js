/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
  const sums = nums
    .sort((a, b) => a - b)
    .reduce((acc, curr, i) => (acc.push(!i ? curr : curr + acc.at(-1)), acc), []);
  
  return queries.map((num) => search(num, sums));
};

const search = (target, sums) => {
  let [l, r] = [0, sums.length - 1];
  
  while (l <= r) {
    const mid = (l + r) >>> 1;
    if (sums[mid] > target) r = mid - 1;
    else l = mid + 1;
  }
  
  return l;
}