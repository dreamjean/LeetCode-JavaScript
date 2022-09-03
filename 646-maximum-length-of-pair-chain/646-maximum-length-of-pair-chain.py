class Solution:
    def findLongestChain(self, pairs: List[List[int]]) -> int:
        pairs = sorted(pairs, key=lambda x: x[1])
        curr, res = -1001, 0
        for x, y in pairs:
            if curr < x:
                curr, res = y, res + 1
        return res