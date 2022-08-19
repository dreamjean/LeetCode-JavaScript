/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let [res, num, sign] = [0, 0, 1];
  const stack = [1];

  for (let c of s) {
    if (c >= "0" && c <= "9") num = num * 10 + +c;
    if (c === "+" || c === "-") {
      res += sign * num;
      sign = stack.at(-1) * (c === "+" ? 1 : -1);
      num = 0;
    }

    if (c === "(") stack.push(sign);
    if (c === ")") stack.pop();
  }

  return res + sign * num;
};
