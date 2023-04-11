class Solution:
    def smallestSubarrays(self, nums: List[int]) -> List[int]:
        ans = [1] * len(nums)
        for i, num in enumerate(nums):
            for j in range(i - 1, -1, -1):
                if (nums[j] | num) == nums[j]:
                    break
                nums[j] |= num
                ans[j] = i - j + 1
        return ans