/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const cnt = new Array(26).fill(0);
  const a = "a".charCodeAt();
  const ans = [];
  let [l, r, count] = [0, 0, p.length];

  for (let ch of p) cnt[ch.charCodeAt() - a]++;

  while (r < s.length) {
    if (cnt[s.charCodeAt(r++) - a]-- > 0) count--;
    if (!count) ans.push(l);

    while (r - l === p.length) 
      if (++cnt[s.charCodeAt(l++) - a] > 0) count++;
  }

  return ans;
};
