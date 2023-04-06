class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        buy, sell = prices[0], 0
        for price in prices:
            buy = min(buy, price)
            sell = max(sell, price - buy)
        return sell