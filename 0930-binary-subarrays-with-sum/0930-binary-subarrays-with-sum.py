class Solution:
    def numSubarraysWithSum(self, nums: List[int], goal: int) -> int:
        def atMost(nums, k):  
            if k < 0:
                return 0
            j = ans = 0
            for i, num in enumerate(nums):
                k -= num
                while k < 0:
                    k += nums[j]
                    j += 1
                ans += i - j + 1
            return ans
          
        
        return atMost(nums, goal) - atMost(nums, goal - 1)
                    