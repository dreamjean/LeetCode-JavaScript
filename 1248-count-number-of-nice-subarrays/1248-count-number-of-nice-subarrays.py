class Solution:
    def numberOfSubarrays(self, nums: List[int], k: int) -> int:
        j = count = ans = 0
        for i, num in enumerate(nums):
            if num & 1:
                k -= 1
                count = 0
            while k == 0:
                k += nums[j] & 1
                j += 1
                count += 1
            ans += count
        return ans