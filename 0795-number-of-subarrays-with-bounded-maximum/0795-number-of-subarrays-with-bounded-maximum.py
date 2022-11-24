class Solution:
    def numSubarrayBoundedMax(self, nums: List[int], left: int, right: int) -> int:
        ans, lo, hi = 0, -1, -1
        for i, num in enumerate(nums):
            if num > right:
                lo = i
            if num >= left:
                hi = i
            ans += hi - lo
        return ans