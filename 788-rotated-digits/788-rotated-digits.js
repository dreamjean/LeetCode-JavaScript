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
  const set1 = new Set('347');
  const set2 = new Set('2569');
  const str = num.toString().split('');
  let good = false;
  
  for (let c of str) {
    if (set1.has(c)) return false;
    if (set2.has(c)) good = true;
  }
  
  return good;
}

