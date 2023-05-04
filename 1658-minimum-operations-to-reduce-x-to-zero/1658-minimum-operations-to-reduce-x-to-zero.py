class Solution:
    def minOperations(self, nums: List[int], x: int) -> int:
        s = sum(nums) - x
        n = len(nums)
        j = window = 0
        
        if s < 0:
            return -1
        if s == 0:
            return n
        
        for i, num in enumerate(nums):
            s -= num
            while s < 0:
                s += nums[j]
                j += 1
            if s == 0:
                window = max(window, i - j + 1)
        return -1 if window == 0 else n - window