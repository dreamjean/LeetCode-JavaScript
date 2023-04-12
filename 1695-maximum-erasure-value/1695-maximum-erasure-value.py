class Solution:
    def maximumUniqueSubarray(self, nums: List[int]) -> int:
        seen = set()
        j, s, ans = 0, 0, 0
        for num in nums:
            s += num
            while num in seen:
                seen.remove(nums[j])
                s -= nums[j]
                j += 1
            seen.add(num)
            ans = max(ans, s)
        return ans