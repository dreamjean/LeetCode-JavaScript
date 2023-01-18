class Solution:
    def maxSubarraySumCircular(self, nums: List[int]) -> int:
        curr_max = curr_min = total = 0
        mx = mi = nums[0]
        for num in nums:
            curr_max = max(num, curr_max + num)
            mx = max(mx, curr_max)
            curr_min = min(num, curr_min + num)
            mi = min(mi, curr_min)
            total += num
        return max(mx, total - mi) if mx > 0 else mx