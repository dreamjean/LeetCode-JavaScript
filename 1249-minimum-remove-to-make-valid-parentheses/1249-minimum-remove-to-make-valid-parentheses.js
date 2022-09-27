/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  const arr = s.split("");
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") count++;
    else if (arr[i] === ")") count ? count-- : (arr[i] = "");
  }

  if (!count) return arr.join("");

  for (let i = arr.length - 1; i >= 0; i--) {
    if (count && arr[i] === "(") {
      count--;
      arr[i] = "";
    }
  }

  return arr.join("");
};
