/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function(n) {
  let cnt = 0;
  
  for (let i = 1; i <= n; i++) cnt += isGood(i);
  
  return cnt;
};

const isGood = (num) => {
  let good = false;
  
  while (num) {
    const x = num % 10;
    if (x === 3 || x === 4 || x === 7) return false;
    if (x === 2 || x === 5 || x === 6 || x === 9) good = true;
    
    num = ~~(num / 10);
  }
  
  return good;
}

