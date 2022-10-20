/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const cnt = new Array(26).fill(0);
  const n = s1.length;
  const a = "a".charCodeAt();

  for (let i = 0; i < n; i++) {
    cnt[s1.charCodeAt(i) - a]++;
    cnt[s2.charCodeAt(i) - a]--;
  }

  if (cnt.every((x) => !x)) return true;

  for (let i = n; i < s2.length; i++) {
    cnt[s2.charCodeAt(i) - a]--;
    cnt[s2.charCodeAt(i - n) - a]++;
    if (cnt.every((x) => !x)) return true;
  }

  return false;
};
