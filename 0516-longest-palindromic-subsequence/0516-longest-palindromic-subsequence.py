class Solution:
    def longestPalindromeSubseq(self, s: str) -> int:
        n = len(s)
        dp = [0] * n
        for i in range(n - 1, -1, -1):
            dp[i], prev = 1, 0
            for j in range(i + 1, n):
                tmp = dp[j]
                if s[i] == s[j]:
                    prev += 2
                dp[j] = max(dp[j], dp[j - 1], prev)
                prev = tmp
        return dp[-1]