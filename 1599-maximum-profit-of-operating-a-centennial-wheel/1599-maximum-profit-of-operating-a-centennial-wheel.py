class Solution:
    def minOperationsMaxProfit(self, customers: List[int], boardingCost: int, runningCost: int) -> int:
        n = len(customers)
        ans, i, wait = -1, 0, 0
        prof = max_prof = 0
        while wait or i < n:
            wait += customers[i] if i < n else 0
            bd = min(4, wait)
            wait -= bd
            prof += bd * boardingCost - runningCost
            i += 1
            if prof > max_prof:
                max_prof, ans = prof, i
        return ans