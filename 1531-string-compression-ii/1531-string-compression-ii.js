/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLengthOfOptimalCompression = function (s, k) {
  const n = s.length;
  const dp = Array.from({ length: n + 1 }, () => new Array(k + 1).fill(n));
  dp[0][0] = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= k; j++) {
      let [letterCnt, deletion] = [0, 0];
      for (let l = i; l >= 1; l--) {
        s.charAt(l - 1) === s.charAt(i - 1) ? letterCnt++ : deletion++;
        let places = getPlaces(letterCnt);

        if (j >= deletion) 
          dp[i][j] = Math.min(dp[i][j], dp[l - 1][j - deletion] + 1 + places);        
      }

      if (j > 0) dp[i][j] = Math.min(dp[i][j], dp[i - 1][j - 1]);
    }
  }

  return dp[n][k];
};

const getPlaces = (count) => {
  if (count >= 100) return 3;
  if (count >= 10) return 2;
  if (count >= 2) return 1;

  return 0;
};
