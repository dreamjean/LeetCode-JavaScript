class Solution:
    def findLengthOfShortestSubarray(self, arr: List[int]) -> int:
        n = len(arr)
        l, r = 0, n - 1
        while r >= 1 and arr[r] >= arr[r - 1]:
            r -= 1
        ans = r
        while l < r and (l == 0 or arr[l] >= arr[l - 1]):
            while r < n and arr[l] > arr[r]:
                r += 1
            ans = min(ans, r - l - 1)
            l += 1
        return ans