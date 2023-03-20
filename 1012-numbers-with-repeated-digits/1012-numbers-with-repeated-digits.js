/**
 * @param {number} n
 * @return {number}
 */
var numDupDigitsAtMostN = function(n) {
  const set = new Set();
  const digits = getDigits(n + 1);
  const len = digits.length;
  let count = 0;
  
  for (let i = 0; i < len - 1; ++i)
    count += 9 * perm(9, i);
  
  for (let i = 0; i < len; ++i) {
    const digit = digits[i];
    for (let j = (!i ? 1 : 0); j < digit; ++j) {
      if (!set.has(j)) count += perm(9 - i, len - i - 1);
    }
    
    if (set.has(digit)) break;
    set.add(digit);
  }
  
  return n - count;
};

const getDigits = (n) => {
  const ans = [];
  
  while (n) {
    ans.unshift(n % 10);
    n = Math.floor(n / 10);
  }
  
  return ans;
}

const perm = (a, b) => {
  let ans = 1;
  
  while (b--) {
    ans *= a--;
  }
  
  return ans;
}