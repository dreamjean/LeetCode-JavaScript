class Solution:
    def countSubarrays(self, nums: List[int], minK: int, maxK: int) -> int:
        ans, bad, lo, hi = 0, -1, -1, -1
        for i, num in enumerate(nums):
            if num < minK or num > maxK:
                bad = i
            if num == minK:
                lo = i
            if num == maxK:
                hi = i
            ans += max(0, min(lo, hi) - bad)
        return ans