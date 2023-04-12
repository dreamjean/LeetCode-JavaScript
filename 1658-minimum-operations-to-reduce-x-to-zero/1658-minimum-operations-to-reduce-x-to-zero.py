class Solution:
    def minOperations(self, nums: List[int], x: int) -> int:
        n, out_sum = len(nums), sum(nums) - x
        j, window = 0, -1
        if out_sum < 0:
            return -1
        if out_sum == 0:
            return n
          
        for i, num in enumerate(nums):
            out_sum -= num
            while out_sum < 0:
                out_sum += nums[j]
                j += 1
            if out_sum == 0:
                window = max(window, i - j + 1)
        return -1 if window < 0 else n - window