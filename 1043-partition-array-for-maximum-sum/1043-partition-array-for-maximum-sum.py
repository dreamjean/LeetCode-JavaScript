class Solution:
    def maxSumAfterPartitioning(self, arr: List[int], k: int) -> int:
        n = len(arr)
        memo = [0] * (n + 1)
        for i in range(1, n + 1):
            curr_max, max_sum = 0, 0
            for j in range(1, min(k + 1, i + 1)):
                curr_max = max(curr_max, arr[i - j])
                max_sum = max(max_sum, memo[i - j] + curr_max * j)
            memo[i] = max_sum
        return memo[-1]