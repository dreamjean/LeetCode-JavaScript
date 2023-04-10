class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        l = r = 0
        while r < len(nums):
            if nums[r] == 0:
                k -= 1
            if k < 0:
                k += nums[l] == 0
                l += 1
            r += 1
        return r - l