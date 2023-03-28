class Solution:
    def mincostTickets(self, days: List[int], costs: List[int]) -> int:
        seen, last = set(days), days[-1]
        dp = [0] * (last + 1)
        for i in range(1, last + 1):
            if i not in seen:
                dp[i] = dp[i - 1]
            else:
                a, b, c = costs
                dp[i] = min(dp[max(0, i - 1)] + a, 
                            dp[max(0, i - 7)] + b, 
                            dp[max(0, i - 30)] + c)
        return dp[-1]
            