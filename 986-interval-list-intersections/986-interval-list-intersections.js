/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    const ans = [];
    let [i, j] = [0, 0];
    
    while (i < firstList.length && j < secondList.length) {
        const [a1, b1] = firstList[i];
        const [a2, b2] = secondList[j];
        const start = Math.max(a1, a2);
        const end = Math.min(b1, b2);
        if (start <= end) ans.push([start, end]);
        
        b1 < b2 ? i++ : j++;
    }
    
    return ans;
};