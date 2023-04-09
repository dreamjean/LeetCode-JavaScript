class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        ans = count0 = j = 0
        for i in range(len(nums)):
            if nums[i] == 0:
                count0 += 1
            while j < i and count0 > 1:
                if nums[j] == 0:
                    count0 -= 1
                j += 1
            ans = max(ans, i - j)
        return ans