class Solution:
    def maxSumTwoNoOverlap(self, nums: List[int], firstLen: int, secondLen: int) -> int:
        def maxSum(nums, L, M):
            sum1, sum2 = 0, 0
            for i in range(L + M):
                if i < L:
                    sum1 += nums[i]
                else:
                    sum2 += nums[i]
            max_sum1, ans = sum1, sum1 + sum2
            for i in range(L+M, len(nums)):
                sum1 += nums[i - M] - nums[i - L - M]
                sum2 += nums[i] - nums[i - M]
                max_sum1 = max(max_sum1, sum1)
                ans = max(ans, max_sum1 + sum2)
            return ans
        
        
        return max(maxSum(nums, firstLen, secondLen), maxSum(nums, secondLen, firstLen))