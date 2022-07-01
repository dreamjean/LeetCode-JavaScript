/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {
    const res = [];
    
    for (let i = 0; i < expression.length; i++) {
        const char = expression.charAt(i);
        if (!isNaN(char)) continue;
        
        const leftResult = diffWaysToCompute(expression.slice(0, i));
        const rightResult = diffWaysToCompute(expression.slice(i + 1));
        
        for (let left of leftResult) {
            for (let right of rightResult) {
                switch (char) {
                    case '+':
                        res.push(left + right);
                        break;
                    case '-':
                        res.push(left - right);
                        break;
                    case '*':
                        res.push(left * right);
                }
            }
        }
    }
    
    return !res.length ? [ parseInt(expression) ] : res;
};