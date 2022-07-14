/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const dfs = (k) => {
        isConnected[k][k] = 0;
        isConnected.forEach((_, i) => isConnected[i][i] && isConnected[k][i] && dfs(i));
    }
    
    return isConnected.reduce((cnt, _, i) => {
        if (isConnected[i][i] === 1) {
            dfs(i);
            cnt++;
        }
        
        return cnt;
    }, 0);
};