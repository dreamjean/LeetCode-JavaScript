class Solution:
    def uniqueLetterString(self, s: str) -> int:
        indexs = {c: [-1, -1] for c in ascii_uppercase}
        ans = 0
        for i, char in enumerate(s):
            x, y = indexs[char]
            ans += (i-y) * (y-x)
            indexs[char] = y, i
        
        for char in indexs:
            x, y = indexs[char]
            ans += (len(s)-y) * (y-x)
        return ans