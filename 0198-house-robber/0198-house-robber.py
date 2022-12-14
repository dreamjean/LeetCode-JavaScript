class Solution:
    def rob(self, nums: List[int]) -> int:
        a = b = 0
        for num in nums:
            a, b = b, max(a + num, b)
        return b