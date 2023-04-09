class Solution:
    def numberOfSubstrings(self, s: str) -> int:
        count = [0] * 3
        j = ans = 0
        for i, ch in enumerate(s):
            count[ord(ch) - ord('a')] += 1
            while count[0] and count[1] and count[2]:
                count[ord(s[j]) - ord('a')] -= 1
                j += 1
            ans += j
        return ans