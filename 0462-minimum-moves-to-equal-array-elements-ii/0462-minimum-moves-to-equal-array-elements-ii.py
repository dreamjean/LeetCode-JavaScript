class Solution:
    def minMoves2(self, nums: List[int]) -> int:
        nums.sort()
        mid = len(nums) // 2
        return sum(abs(nums[mid] - num) for num in nums)