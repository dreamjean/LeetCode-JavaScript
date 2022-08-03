/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var orderlyQueue = function (s, k) {
  if (k > 1) return s.split("").sort().join("");

  const [doubleS, n] = [s + s, s.length];
  let ans = s;

  for (let i = 1; i < n; i++) {
    const temp = doubleS.slice(i, i + n);
    if (temp < ans) ans = temp;
  }

  return ans;
};
