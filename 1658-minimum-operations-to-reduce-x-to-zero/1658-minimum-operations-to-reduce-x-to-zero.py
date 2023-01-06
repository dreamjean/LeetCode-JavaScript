class Solution:
    def minOperations(self, nums: List[int], x: int) -> int:
        rest_sum, n = sum(nums) - x, len(nums)
        start, curr_sum, diff = 0, 0, 0
        if rest_sum < 0:
            return -1
        if rest_sum == 0:
            return n
          
        for i, num in enumerate(nums):
            curr_sum += num
            while curr_sum > rest_sum:
                curr_sum -= nums[start]
                start += 1
            if curr_sum == rest_sum:
                diff = max(diff, i - start + 1)
        return -1 if diff == 0 else n - diff