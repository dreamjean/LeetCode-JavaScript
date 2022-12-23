class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        sold, hold, ans = 0, float('-inf'), 0
        for p in prices:
            preSold = sold
            sold = hold + p
            hold = max(hold, ans - p)
            ans = max(ans, preSold)
        return max(ans, sold)