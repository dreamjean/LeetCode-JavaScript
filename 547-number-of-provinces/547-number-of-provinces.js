/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const n = isConnected.length;

  const dfs = (k) => {
    isConnected[k][k] = 0;

    isConnected.forEach(
      (_, i) => isConnected[i][i] && isConnected[i][k] && dfs(i)
    );
  };

  return isConnected.reduce((cnt, _, i) => {
    if (isConnected[i][i]) {
      cnt++;
      dfs(i);
    }

    return cnt;
  }, 0);
};
