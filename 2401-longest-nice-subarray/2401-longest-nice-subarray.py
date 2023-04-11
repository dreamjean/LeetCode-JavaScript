class Solution:
    def longestNiceSubarray(self, nums: List[int]) -> int:
        used = j = ans = 0
        for i, num in enumerate(nums):
            while used & num:
                used ^= nums[j]
                j += 1
            used |= num
            ans = max(ans, i - j + 1)
        return ans