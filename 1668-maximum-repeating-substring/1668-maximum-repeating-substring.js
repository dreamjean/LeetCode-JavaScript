/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
  let [newWord, cnt] = [word, 0];

  while (sequence.includes(newWord)) {
    newWord += word;
    cnt++;
  }

  return cnt;
};
