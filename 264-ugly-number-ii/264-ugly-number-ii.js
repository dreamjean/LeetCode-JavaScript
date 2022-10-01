/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  const ans = [1];
  let [i2, i3, i5] = [0, 0, 0];

  while (!ans[n - 1]) {
    const [t2, t3, t5] = [ans[i2] * 2, ans[i3] * 3, ans[i5] * 5];
    const ugly = Math.min(t2, t3, t5);
    ans.push(ugly);

    if (t2 === ugly) i2++;
    if (t3 === ugly) i3++;
    if (t5 === ugly) i5++;
  }

  return ans[n - 1];
};
