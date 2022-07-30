/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function (words1, words2) {
  const countB = new Array(26).fill(0);

  for (let word of words2) {
    const curr = counter(word);
    for (let i = 0; i < countB.length; i++)
      countB[i] = Math.max(countB[i], curr[i]);
  }

  return words1.filter((word) => isSubset(counter(word), countB));
};

const counter = (str) => {
  const cnt = new Array(26).fill(0);

  for (let ch of str) cnt[ch.charCodeAt() - "a".charCodeAt()]++;

  return cnt;
};

const isSubset = (countA, countB) => !countA.some((num, i) => num < countB[i]);
