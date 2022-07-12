/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const n = isConnected.length;
    
    const fill = k => {
        isConnected[k][k] = 0;
        
        isConnected.forEach((_, i) => isConnected[i][i] === 1 && isConnected[k][i] === 1 && fill(i));
    }

    return isConnected.reduce((cnt, _, i) => {
        if (isConnected[i][i]) {
            fill(i);
            cnt++;
        }
        
        return cnt;
    }, 0)
};

