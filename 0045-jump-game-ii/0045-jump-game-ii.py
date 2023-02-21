class Solution:
    def jump(self, nums: List[int]) -> int:
        jumps = end = can_farthest = 0
        for i in range(len(nums) - 1):
            can_farthest = max(can_farthest, nums[i] + i)
            if i == end:
                end = can_farthest
                jumps += 1
        return jumps