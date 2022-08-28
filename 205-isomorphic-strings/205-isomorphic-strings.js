/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const cnt1 = new Array(256).fill(0);
  const cnt2 = new Array(256).fill(0);

  for (let i = 0; i < s.length; i++) {
    const [key1, key2] = [s.charCodeAt(i), t.charCodeAt(i)];
    if (cnt1[key1] !== cnt2[key2]) return false;

    cnt1[key1] = i + 1;
    cnt2[key2] = i + 1;
  }

  return true;
};
