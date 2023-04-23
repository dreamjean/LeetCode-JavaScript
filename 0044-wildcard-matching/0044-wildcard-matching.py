class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        m, n = len(s), len(p)
        i, j, i_start, j_start = 0, 0, -1, -1
        while i < m:
            if j < n and (s[i] == p[j] or p[j] == '?'):
                i += 1
                j += 1
            elif j < n and p[j] == '*':
                i_start = i
                j_start = j
                j += 1
            elif i_start >= 0:
                i_start += 1
                i = i_start
                j = j_start + 1
            else:
                return False
        return all(x == '*' for x in p[j:])