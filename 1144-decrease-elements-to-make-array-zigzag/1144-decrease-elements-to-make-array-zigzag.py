class Solution:
    def movesToMakeZigzag(self, nums: List[int]) -> int:
        sums = [0] * 2
        for i, num in enumerate(nums):
            left = nums[i - 1] if i else inf
            right = nums[i + 1] if i < len(nums) - 1 else inf
            sums[i % 2] += max(0, num - min(left, right) + 1)
        return min(sums)