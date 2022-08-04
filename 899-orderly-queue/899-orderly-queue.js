/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var orderlyQueue = function (s, k) {
  if (k > 1) return s.split("").sort().join("");

  const [doubleS, n] = [s + s, s.length];
  let ans = s;

  for (let i = 0; i < n; i++) {
    const tmp = doubleS.slice(i, i + n);

    if (tmp < ans) ans = tmp;
  }

  return ans;
};
