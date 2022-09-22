class Solution:
    def findLongestChain(self, pairs: List[List[int]]) -> int:
        pairs = sorted(pairs, key=lambda x: x[1])
        curr, res = -1001, 0
        for a, b in pairs:
            if curr < a:
                curr = b
                res += 1
        return res