class Solution:
    def makeArrayIncreasing(self, arr1: List[int], arr2: List[int]) -> int:
        arr1 = [-1] + arr1 + [inf]
        arr2 = sorted(list(set(arr2)))
        n = len(arr1)
        dp = [0] + [inf] * (n - 1)
        for i in range(1, n):
            j = bisect_left(arr2, arr1[i])
            for k in range(1, min(i - 1, j) + 1):
                if arr1[i-k-1] < arr2[j-k]:
                    dp[i] = min(dp[i], dp[i-k-1] + k)
            if arr1[i-1] < arr1[i]:
                dp[i] = min(dp[i], dp[i-1])
        return dp[-1] if dp[-1] < inf else -1