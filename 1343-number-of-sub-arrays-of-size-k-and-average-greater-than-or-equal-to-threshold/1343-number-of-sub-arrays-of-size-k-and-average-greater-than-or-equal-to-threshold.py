class Solution:
    def numOfSubarrays(self, arr: List[int], k: int, threshold: int) -> int:
        target = threshold * k
        s = sum(arr[:k])
        ans = +(s >= target)
        for i in range(k, len(arr)):
            s += arr[i] - arr[i - k]
            ans += +(s >= target)
        return ans