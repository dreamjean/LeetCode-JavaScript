class Solution:
    def numSubseq(self, nums: List[int], target: int) -> int:
        nums.sort()
        n, mod = len(nums), 10**9 + 7
        pows = [1] + [0] * (n - 1)
        l, r, ans = 0, n - 1, 0
        
        for i in range(1, n):
            pows[i] = (pows[i - 1] * 2) % mod
            
        while l <= r:
            if nums[l] + nums[r] > target:
                r -= 1
            else:
                ans = (ans + pows[r - l]) % mod
                l += 1
        return ans