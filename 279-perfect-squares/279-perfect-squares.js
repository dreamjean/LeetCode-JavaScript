/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  if (isPerfectSquare(n)) return 1;
  if (checkAnswer4(n)) return 4;
  
  for (let i = 1; i * i <= n; i++) {
    const j = n - i * i;
    if (isPerfectSquare(j)) return 2;
  }
  
  return 3;
};

const isPerfectSquare = x => Math.floor(Math.sqrt(x)) ** 2 === x;

const checkAnswer4 = n => {
  while (!(n % 4)) n /= 4;
  
  return n % 8 === 7;
}