/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function(brackets, income) {
  let sum = 0;
  
  for (let i = 0; i < brackets.length; i++) {
    const preUpper = brackets[i - 1]?.[0];
    let [upper, percent] = brackets[i];
    upper = upper > income ? income : upper;
    if (upper <= preUpper) break;
    
    sum += (upper - (preUpper || 0)) * percent / 100;
  }
  
  return !income ? 0 : sum;
};