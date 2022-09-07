/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function (n, k) {
  const ans = [];
  let [left, right] = [1, n];

  while (left <= right) {
    if (k > 1) ans.push(k-- % 2 ? left++ : right--);
    else ans.push(left++);
  }

  return ans;
};
