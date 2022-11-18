class Solution:
    def sumSubseqWidths(self, nums: List[int]) -> int:
        MOD = 10 ** 9 + 7
        power, n, ans = 1, len(nums), 0
        nums.sort()
        for i in range(n):
            ans = (ans + (nums[i] - nums[n - 1 - i]) * power) % MOD
            power = power * 2 % MOD
        return (ans + MOD) % MOD
            