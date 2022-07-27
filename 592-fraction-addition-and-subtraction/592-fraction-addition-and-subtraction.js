/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function (expression) {
  let [i, num, den] = [0, 0, 1];

  if (!expression.startsWith("-")) expression = `+${expression}`;

  while (i < expression.length) {
    let [sign, prevNum, prevDen] = [1, 0, 0];
    if (expression[i] === "-") sign = -1;

    while (+expression[++i] < 10) prevNum = prevNum * 10 + +expression[i];
    while (+expression[++i] < 10) prevDen = prevDen * 10 + +expression[i];

    prevNum *= sign;

    if (prevDen !== den) {
      num = num * prevDen + prevNum * den;
      den *= prevDen;
    } else num += prevNum;

    if (!num) den = 1;
  }

  const g = gcd(Math.abs(num), den);

  return `${num / g}/${den / g}`;
};

const gcd = (a, b) => (!b ? a : gcd(b, a % b));
