class Solution:
    def maxFrequency(self, nums: List[int], k: int) -> int:
        nums.sort()
        j = s = ans = 0
        for i, num in enumerate(nums):
            s += num
            while s + k < num * (i - j + 1):
                s -= nums[j]
                j += 1
            ans = max(ans, i - j + 1)
        return ans