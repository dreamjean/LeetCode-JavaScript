class Solution:
    def validSubarraySize(self, nums: List[int], threshold: int) -> int:
        nums = [0] + nums + [0]
        stack = [0]
        for i, num in enumerate(nums):
            while num < nums[stack[-1]]:
                j = stack.pop()
                if nums[j] > threshold // (i - stack[-1] - 1):
                    return i - stack[-1] - 1
            stack.append(i)
        return -1