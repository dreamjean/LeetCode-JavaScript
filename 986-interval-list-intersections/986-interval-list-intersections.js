/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    let [i, j] = [0, 0];
    const ans = [];
    
    while (i < firstList.length && j < secondList.length) {
        const start = Math.max(firstList[i][0], secondList[j][0]);
        const end = Math.min(firstList[i][1], secondList[j][1]);
        if (start <= end) ans.push([start, end]);
        
        firstList[i][1] < secondList[j][1] ? ++i : ++j;
    }
    
    return ans;
};