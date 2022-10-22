/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const cnt = new Array(128).fill(0);
  let [l, r, start, end, k] = [0, 0, 0, Infinity, t.length];

  for (let ch of t) cnt[ch.charCodeAt()]++;

  while (r < s.length) {
    if (cnt[s.charCodeAt(r)]-- > 0) k--;
    while (!k) {
      if (r - l < end - start) [start, end] = [l, r];
      if (++cnt[s.charCodeAt(l++)] > 0) k++;
    }

    r++;
  }

  return end === Infinity ? "" : s.slice(start, end + 1);
};
