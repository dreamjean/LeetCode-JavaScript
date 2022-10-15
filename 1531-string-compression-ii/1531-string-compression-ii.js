/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLengthOfOptimalCompression = function(s, k) {
  const n = s.length
  const dp = Array.from({ length: n + 1 }, () => new Array(k + 1).fill(n))
  dp[0][0] = 0
 
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= k; j++) {
      let [letterCnt, deletion] = [0, 0]

      // keep s[i], compress same letters, remove different letters
      for (let l = i; l >= 1; l--) {
        s.charAt(l - 1) === s.charAt(i - 1) ? letterCnt++ : deletion++

        // places = length needed to rep compressed letters.
        // 0 places for count = 1,0, 1 place = <10, 10-99 requires 2 places, 100+ requires 3
        let places = 0
        if (letterCnt >= 100) places = 3
        else if (letterCnt >= 10) places = 2
        else if (letterCnt >= 2) places = 1
        
        if (j - deletion >= 0) {
          dp[i][j] = Math.min(dp[i][j], dp[l - 1][j - deletion] + 1 + places)
        }
      }
      // delete
      if (j > 0) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][j - 1])
      }
    }
  }
  return dp[n][k]

};