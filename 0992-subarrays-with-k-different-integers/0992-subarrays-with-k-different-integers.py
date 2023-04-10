class Solution:
    def subarraysWithKDistinct(self, nums: List[int], k: int) -> int:
        def atMost(nums, k):
            count = Counter()
            j = ans = 0
            for i, num in enumerate(nums):
                k -= count[num] == 0
                count[num] += 1
                while k < 0:
                    count[nums[j]] -= 1
                    k += count[nums[j]] == 0                    
                    j += 1
                ans += i - j + 1
            return ans
          
          
        return atMost(nums, k) - atMost(nums, k - 1)
                    