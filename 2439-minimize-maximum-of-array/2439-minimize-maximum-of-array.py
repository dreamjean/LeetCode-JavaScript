class Solution:
    def minimizeArrayValue(self, nums: List[int]) -> int:
        return max((num + i) // (i + 1) for i, num in enumerate(accumulate(nums)))