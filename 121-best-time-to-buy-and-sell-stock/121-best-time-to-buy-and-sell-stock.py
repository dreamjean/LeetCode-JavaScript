class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        min_p, max_d = prices[0], 0
        for p in prices:
            min_p = min(min_p, p)
            max_d = max(max_d, p - min_p)
        return max_d