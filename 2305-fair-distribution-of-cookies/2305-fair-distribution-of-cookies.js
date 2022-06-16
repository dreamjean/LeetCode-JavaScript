/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function(cookies, k) {
    const children = new Array(k).fill(0);
    let ans = Number.MAX_VALUE;
    
    const backtrack = (cookies, k, start = 0) => {
        if (start === cookies.length) return ans = Math.min(ans, Math.max(...children));
        
        for (let i = 0; i < k; i++) {
            children[i] += cookies[start];
            backtrack(cookies, k, start + 1);
            children[i] -= cookies[start];
            
            if (!children[i]) break;
        }
    }
    
    backtrack(cookies, k, 0);
    
    return ans;
};