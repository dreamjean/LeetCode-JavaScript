/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  if (isPerfectSquare(n)) return 1;
  if (checkAnswer4(n)) return 4;
  
  for (let i = 1; i * i <= n; ++i) {
    const x = n - i * i;
    if (isPerfectSquare(x)) return 2;
  }
  
  return 3;
};

const isPerfectSquare = (n) => Math.floor(Math.sqrt(n)) ** 2 === n;

const checkAnswer4 = (n) => {
  while (!(n % 4)) n /= 4;
  
  return n % 8 === 7;
}