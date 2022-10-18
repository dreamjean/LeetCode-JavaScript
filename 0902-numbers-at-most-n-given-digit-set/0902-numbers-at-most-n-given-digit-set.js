/**
 * @param {string[]} digits
 * @param {number} n
 * @return {number}
 */
var atMostNGivenDigitSet = function(digits, n) {
  const str = n.toString();
  const [nLen, dLen] = [str.length, digits.length];
  let [res, i] = [0, 0];
  
  for (let j = 1; j < nLen; j++) res += dLen ** j;
  
  while (i < nLen) {
    res += digits.reduce((acc, curr) => acc + (+curr < +str[i]), 0) * (dLen ** (nLen - i - 1));
    if (!digits.includes(str[i])) break
    
    i++;
  }
  
  return res + (i === nLen);
};