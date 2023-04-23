class Solution:
    def lastSubstring(self, s: str) -> str:
        l, r, offset = 0, 1, 0
        while r + offset < len(s):
            if s[l + offset] == s[r + offset]:
                offset += 1
            else:
                if s[l + offset] < s[r + offset]:
                    l += offset + 1
                else:
                    r += offset + 1
                if l == r:
                    r += 1
                offset = 0
        return s[l:]