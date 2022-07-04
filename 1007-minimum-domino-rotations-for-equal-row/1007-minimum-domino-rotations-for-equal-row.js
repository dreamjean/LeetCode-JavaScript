/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function(tops, bottoms) {
    const [targetA, targetB] = [tops[0], bottoms[0]];
    const n = tops.length;
    
    for (const target of [targetA, targetB]) {
        let [countA, countB] = [0, 0];
        
        for (let i = 0; i < n; i++) {
            if (tops[i] !== target && bottoms[i] !== target) break;
            
            if (tops[i] !== target) countA++;
            if (bottoms[i] !== target) countB++;
            if (i === n - 1) return Math.min(countA, countB);
        }
    }
    
    return -1;
};