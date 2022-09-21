class Solution:
    def canJump(self, nums: List[int]) -> bool:
        maxStep = 0
        for i in range(len(nums)):
            if maxStep < i:
                return False
            maxStep = max(maxStep, nums[i] + i)
        return True