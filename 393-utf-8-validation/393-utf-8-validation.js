/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function (data) {
  let cnt = 0;

  for (let code of data) {
    if (!cnt) {
      if (code >> 5 === 0b110) cnt = 1;
      else if (code >> 4 === 0b1110) cnt = 2;
      else if (code >> 3 === 0b11110) cnt = 3;
      else if (code >> 7) return false;
    } else {
      if (code >> 6 !== 0b10) return false;
      cnt--;
    }
  }

  return cnt === 0;
};
