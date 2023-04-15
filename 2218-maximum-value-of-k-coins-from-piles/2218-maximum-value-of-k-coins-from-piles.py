class Solution:
    def maxValueOfCoins(self, piles: List[List[int]], k: int) -> int:
        @cache
        def dp(i, k):
            if i == len(piles) or k == 0:
                return 0
            res, curr = dp(i + 1, k), 0
            for j in range(min(len(piles[i]), k)):
                curr += piles[i][j]
                res = max(res, dp(i + 1, k - j - 1) + curr)
            return res
        
        
        return dp(0, k)
