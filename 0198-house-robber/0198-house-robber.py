class Solution:
    def rob(self, nums: List[int]) -> int:
        a = b = 0
        for num in nums:
            a, b = b, max(b, num + a)
        return max(a, b)
        