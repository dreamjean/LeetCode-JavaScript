class Solution:
    def longestNiceSubarray(self, nums: List[int]) -> int:
        used = j = ans = 0
        for i, num in enumerate(nums):
            while num & used:
                used ^= nums[j]
                j += 1
            ans = max(ans, i - j + 1)
            used |= num
        return ans