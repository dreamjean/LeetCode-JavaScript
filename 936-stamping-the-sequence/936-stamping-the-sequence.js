/**
 * @param {string} stamp
 * @param {string} target
 * @return {number[]}
 */
var movesToStamp = function (stamp, target) {
  if (stamp === target) return [0];
  let slen = stamp.length,
    tlen = target.length - slen + 1,
    ans = [],
    tdiff = true,
    sdiff,
    i,
    j;
  (stamp = stamp.split("")), (target = target.split(""));
  while (tdiff)
    for (i = 0, tdiff = false; i < tlen; i++) {
      for (j = 0, sdiff = false; j < slen; j++)
        if (target[i + j] === "*") continue;
        else if (target[i + j] !== stamp[j]) break;
        else sdiff = true;
      if (j === slen && sdiff) {
        for (j = i, tdiff = true; j < slen + i; j++) target[j] = "*";
        ans.unshift(i);
      }
    }
  for (i = 0; i < target.length; i++) if (target[i] !== "*") return [];
  return ans;
};
