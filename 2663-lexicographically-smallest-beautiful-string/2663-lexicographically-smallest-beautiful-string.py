class Solution:
    def smallestBeautifulString(self, s: str, k: int) -> str:
        a = ord('a')
        k += a
        pos = list(map(ord, s))
        n = len(s)
        i = n - 1
        pos[i] += 1
        while i < n:
            if pos[i] == k:
                if i == 0:
                    return ""
                pos[i] = a
                i -= 1
                pos[i] += 1
            elif i > 0 and pos[i] == pos[i - 1] or i > 1 and pos[i] == pos[i - 2]:
                pos[i] += 1
            else:
                i += 1
        return ''.join(map(chr, pos))