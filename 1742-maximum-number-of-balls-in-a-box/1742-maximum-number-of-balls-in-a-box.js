/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
  const map = {};
  
  for (let i = lowLimit; i <= highLimit; i++) {
    const sum = getDigitsSum(i);
    map[sum] ? map[sum]++ : map[sum] = 1;
  }
  
  return Math.max(...Object.values(map));
};

const getDigitsSum = (n) => {
  let sum = 0;
  
  while (n) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  
  return sum;
}