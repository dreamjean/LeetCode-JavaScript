/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  const queue = [s];

  for (let i = 0; i < s.length; i++) {
    if (/[0-9]/.test(s[i])) continue;

    const size = queue.length;
    for (let j = 0; j < size; j++) {
      const str = queue.shift();
      queue.push(
        changeLetter(str, i, str[i].toUpperCase()),
        changeLetter(str, i, str[i].toLowerCase())
      );
    }
  }

  return queue;
};

const changeLetter = (str, i, char) =>
  str.slice(0, i) + char + str.slice(i + 1);
