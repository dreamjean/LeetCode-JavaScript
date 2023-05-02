class Solution:
    def countOperationsToEmptyArray(self, nums: List[int]) -> int:
        n = len(nums)
        pos = sorted(range(n), key=lambda i: nums[i])
        return n + sum(n - i for i in range(1, n) if pos[i] < pos[i - 1])