class Solution:
    def maximumTop(self, nums: List[int], k: int) -> int:
        n = len(nums)
        if n == 1:
            return -1 if (k & 1) else nums[0]
        if k <= 1:
            return nums[k]
        if k > n:
            return max(nums)
        if k == n:
            return max(nums[:n-1])
        return max(max(nums[:k-1]), nums[k])