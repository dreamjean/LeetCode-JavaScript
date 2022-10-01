/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function (number) {
  number = number.replace(/[- ]/g, "");
  let n = number.length;
  let avg = n % 3;
  let ans = "";

  if (n <= 3) return number;

  for (let i = 0; i < n; i++) {
    if (avg !== 1) ans += (i + 1) % 3 ? number[i] : `${number[i]}-`;
    else {
      if (i !== n - 2) ans += (i + 1) % 3 ? number[i] : `${number[i]}-`;
      else ans += `-${number[i]}`;
    }
  }

  return !avg ? ans.slice(0, -1) : ans;
};
