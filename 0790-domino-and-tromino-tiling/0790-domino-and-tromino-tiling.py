class Solution:
    def numTilings(self, n: int) -> int:
        mod = 10 ** 9 + 7
        dp = [0, 1, 2, 5] + [0] * (n - 3)
        for i in range(4, n + 1):
            dp[i] = (2 * dp[i - 1] + dp[i - 3]) % mod
        return dp[n]
      
        