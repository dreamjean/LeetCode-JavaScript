/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const set = new Set(wordDict);
  const ok = [true];

  for (let i = 1; i <= s.length; i++) {
    let curr = false;
    for (let j = 0; j < i; j++)
      if (set.has(s.slice(j, i)) && ok[j]) curr = true;

    ok.push(curr);
  }

  return ok.at(-1);
};
