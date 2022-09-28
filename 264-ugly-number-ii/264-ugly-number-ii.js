/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  const ans = [1];
  let [i2, i3, i5] = [0, 0, 0];

  while (!ans[n - 1]) {
    const [c1, c2, c3] = [ans[i2] * 2, ans[i3] * 3, ans[i5] * 5];
    const ugly = Math.min(c1, c2, c3);
    ans.push(ugly);

    if (ugly === c1) i2++;
    if (ugly === c2) i3++;
    if (ugly === c3) i5++;
  }

  return ans[n - 1];
};
