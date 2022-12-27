class Solution:
    def minimumLength(self, s: str) -> int:
        l, r = 0, len(s) - 1
        while l < r and s[l] == s[r]:
            while l + 1 < r and s[l + 1] == s[l]:
                l += 1
            while r - 1 > l and s[r - 1] == s[r]:
                r -= 1
            l += 1
            r -= 1
        return r - l + 1
        