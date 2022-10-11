class Solution:
    def subArrayRanges(self, nums: List[int]) -> int:
        n, s = len(nums), 0
        for i in range(n):
            low, high = nums[i], nums[i]
            for j in range(i, n):
                low = min(low, nums[j])
                high = max(high, nums[j])
                s += high - low
        return s
      