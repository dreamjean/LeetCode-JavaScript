/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  return arr.sort((a, b) =>
    bitCountOnes(a) === bitCountOnes(b)
      ? a - b
      : bitCountOnes(a) - bitCountOnes(b)
  );
};

const bitCountOnes = (num) => {
  let count = 0;

  while (num) {
    count++;
    num &= num - 1;
  }

  return count;
};
