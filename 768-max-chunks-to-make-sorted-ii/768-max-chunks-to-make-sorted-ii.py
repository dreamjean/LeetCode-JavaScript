class Solution:
    def maxChunksToSorted(self, arr: List[int]) -> int:
        s1, s2, res = 0, 0, 0
        for a, b in zip(arr, sorted(arr)):
            s1 += a
            s2 += b
            res += s1 == s2
        return res
        