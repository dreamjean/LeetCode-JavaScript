/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
  let [sum0, sum1, maxSum1] = [0, 0, 0];
  
  customers.forEach((num, i) => {
    !grumpy[i] ? sum0 += num : sum1 += num;
    
    if (i >= minutes && grumpy[i - minutes] > 0) sum1 -= customers[i - minutes];
    
    maxSum1 = Math.max(maxSum1, sum1);
  })
  
  return sum0 + maxSum1;
};