/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const n = isConnected.length;
    let count = 0;
    
    const fill = k => {
        isConnected[k][k] = 0;
        
        isConnected.forEach((_, i) => isConnected[i][i] === 1 && isConnected[k][i] === 1 && fill(i));
    }

    for (let i = 0; i < n; i++) {
        if (isConnected[i][i] === 1) {
            fill(i);
            count++;
        }
    }
    
    return count;
};

