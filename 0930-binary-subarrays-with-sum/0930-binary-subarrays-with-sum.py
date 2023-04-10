class Solution:
    def numSubarraysWithSum(self, nums: List[int], goal: int) -> int:
        l1 = l2 = sum1 = sum2 = ans = 0
        for r, num in enumerate(nums):
            sum1 += num
            sum2 += num
            while sum1 > goal:
                sum1 -= nums[l1]
                l1 += 1
            while sum2 >= goal and l2 <= r:
                sum2 -= nums[l2]
                l2 += 1
            ans += l2 - l1
        return ans