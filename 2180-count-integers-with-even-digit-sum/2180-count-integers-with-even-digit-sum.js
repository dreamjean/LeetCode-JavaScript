/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
  let [temp, sum] = [num, 0];
  
  while (temp) {
    sum += temp % 10;
    temp = ~~(temp / 10);
  }
  
  return ~~((num - (sum & 1)) / 2);
};