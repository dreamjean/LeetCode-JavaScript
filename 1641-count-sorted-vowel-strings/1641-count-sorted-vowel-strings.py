class Solution:
    def countVowelStrings(self, n: int) -> int:
        a = b = c = d = e = 1
        while n:
            a += b + c + d + e
            b += c + d + e
            c += d + e
            d += e
            n -= 1
        return a