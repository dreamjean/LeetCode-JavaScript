/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  let [product, sum] = [1, 0];
  
  while (n) {
    product *= n % 10;
    sum += n % 10;
    n = ~~(n / 10);
  }
  
  return product - sum;
};