/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const n = ratings.length;
    const candies = new Array(n).fill(1);
    
    for (let i = 1; i < n; ++i) 
        if (ratings[i - 1] < ratings[i]) 
            candies[i] = candies[i - 1] + 1;
        
    for (let i = n - 1; i > 0; --i)
        if (ratings[i - 1] > ratings[i])
            candies[i - 1] = Math.max(candies[i] + 1, candies[i - 1]);
    
    return candies.reduce((a, b) => a + b);
};