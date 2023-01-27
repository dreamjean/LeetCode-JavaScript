class Solution:
    def greatestLetter(self, s: str) -> str:
        seen = set(s)
        upper, lower = ord('Z'), ord('z')
        for i in range(26):
            if chr(upper - i) in seen and chr(lower - i) in seen:
                return chr(upper - i)
        return ''