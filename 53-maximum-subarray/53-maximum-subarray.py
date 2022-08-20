class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        sum, res = 0, nums[0]
        for num in nums:
            sum = max(num, sum + num)
            res = max(res, sum)
        return res
            
            