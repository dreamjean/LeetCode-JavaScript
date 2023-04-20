class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        d, preSum, ans = {0:1}, 0, 0
        for num in nums:
            preSum += num
            if preSum - k in d:
                ans += d[preSum - k]
            d[preSum] = d.get(preSum, 0) + 1
        return ans