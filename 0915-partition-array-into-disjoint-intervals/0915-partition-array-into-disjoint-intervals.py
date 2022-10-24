class Solution:
    def partitionDisjoint(self, nums: List[int]) -> int:
        left_max = curr_max = nums[0]
        pivot = 0
        for i in range(1, len(nums)):
            left_max = max(left_max, nums[i])
            if curr_max > nums[i]:
                curr_max = left_max
                pivot = i
        return pivot + 1