class Solution:
    def minOperations(self, nums: List[int], x: int) -> int:
        n = len(nums)
        s = sum(nums) - x
        j, window = 0, -1
        
        if s < 0:
            return -1
        if s == 0:
            return n
        
        for i, num in enumerate(nums):
            s -= num
            while s < 0 and j < n:
                s += nums[j]
                j += 1
            if s == 0:
                window = max(window, i - j + 1)
        return window if window < 0 else n - window
                