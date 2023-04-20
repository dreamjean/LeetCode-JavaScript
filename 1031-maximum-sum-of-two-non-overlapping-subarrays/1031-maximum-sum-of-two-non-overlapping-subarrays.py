class Solution:
    def maxSumTwoNoOverlap(self, nums: List[int], firstLen: int, secondLen: int) -> int:
        def maxSum(nums, L, M):
            sumL = sumM = 0
            for i in range(L + M):
                if i < L:
                    sumL += nums[i]
                else:
                    sumM += nums[i]
                    
            maxL, ans = sumL, sumL + sumM
            for i in range(L + M, len(nums)):
                sumL += nums[i - M] - nums[i - L - M]
                maxL = max(maxL, sumL)
                sumM += nums[i] - nums[i - M]
                ans = max(ans, maxL + sumM)
            return ans
                    
          
        return max(maxSum(nums, firstLen, secondLen), maxSum(nums, secondLen, firstLen))