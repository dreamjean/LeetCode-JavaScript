class Solution:
    def zeroFilledSubarray(self, nums: List[int]) -> int:
        count = j = 0
        for i, num in enumerate(nums):
            if num:
                j = i + 1
            count += i - j + 1
        return count