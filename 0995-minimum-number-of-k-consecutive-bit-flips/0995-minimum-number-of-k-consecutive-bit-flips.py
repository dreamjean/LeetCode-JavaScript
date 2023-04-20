class Solution:
    def minKBitFlips(self, nums: List[int], k: int) -> int:
        n, fliped, ans = len(nums), 0, 0
        for i in range(n):
            if i >= k and nums[i-k] > 1:
                fliped -= 1
            if fliped % 2 == nums[i]:
                if i + k > n:
                    return -1
                nums[i] = 2
                fliped += 1
                ans += 1
        return ans