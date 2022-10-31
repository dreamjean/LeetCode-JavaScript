/**
 * @param {number} n
 * @return {number}
 */
var magicalString = function (n) {
  const s = [1, 2, 2];
  let i = 2;

  while (s.length < n) {
    const even = !(i % 2) ? 1 : 2;
    s[i] === 1 ? s.push(even) : s.push(even, even);
    i++;
  }

  return s.slice(0, n).reduce((a, b) => a + (b === 1), 0);
};
