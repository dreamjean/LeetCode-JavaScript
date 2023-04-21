/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function(n) {
  let ans = 0;
  
  while (n) ans += isGood(n--);
  
  return ans;
};

const isGood = (n) => {
  let good = false;
  
  while (n) {
    const x = n % 10;
    if (x === 3 || x === 4 || x === 7) return false;
    if (x === 2 || x === 5 || x === 6 || x === 9) good = true;
    
    n = Math.floor(n / 10);
  }
  
  return good;
}