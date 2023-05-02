class Solution:
    def arraySign(self, nums: List[int]) -> int:
        if 0 in nums:
            return 0
        return -1 if sum(x < 0 for x in nums) % 2 else 1