class Solution:
    def findLengthOfShortestSubarray(self, arr: List[int]) -> int:
        n = len(arr)
        l, r = 0, n - 1
        while r > 0 and arr[r-1] <= arr[r]:
            r -= 1
        ans = r
        while l < r and (l == 0 or arr[l-1] <= arr[l]):
            while r < n and arr[r] < arr[l]: 
                r += 1
            ans = min(ans, r - l - 1)
            l += 1
        return ans
        