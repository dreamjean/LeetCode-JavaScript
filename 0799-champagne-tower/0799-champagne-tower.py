class Solution:
    def champagneTower(self, poured: int, query_row: int, query_glass: int) -> float:
        dp = [poured] + [0] * query_row
        for i in range(1, query_row + 1):
            for j in range(i, -1, -1):
                dp[j] = max(0, dp[j] - 1) / 2.0 + max(dp[j - 1] - 1, 0) / 2.0
        return min(1, dp[query_glass])
