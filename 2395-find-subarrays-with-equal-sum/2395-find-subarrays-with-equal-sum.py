class Solution:
    def findSubarrays(self, nums: List[int]) -> bool:
        seen = set()
        for i in range(1, len(nums)):
            s = nums[i] + nums[i - 1]
            if s in seen:
                return True
            seen.add(s)
        return False