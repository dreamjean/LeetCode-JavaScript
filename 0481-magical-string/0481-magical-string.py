class Solution:
    def magicalString(self, n: int) -> int:
        s = [1, 2, 2]
        i = 2
        while len(s) < n:
            s += s[i] * [3 - s[-1]]
            i += 1
        return s[:n].count(1)