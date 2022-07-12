/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function(matchsticks) {
    matchsticks.sort((a, b) => b - a);
    const side = matchsticks.reduce((a, b) => a + b) / 4;
    const n = matchsticks.length;
    
    if (side !== ~~side || matchsticks[0] > side) return false;
    
    const backtrack = (space, done, i) => {
        if (done === 3) return true;
        
        for (; i < n; i++) {
            let num = matchsticks[i];
            let res = false;
            
            if (num > space) continue;
            
            matchsticks[i] = side + 1;
            if (num === space) res = backtrack(side, done + 1, 1);
            else res = backtrack(space - num, done, i + 1);
            
            if (res) return true;
            
            matchsticks[i] = num;
            while (matchsticks[i + 1] === num) i++;
        }
        
        return false;
    }
    
    return backtrack(side, 0, 0);
};