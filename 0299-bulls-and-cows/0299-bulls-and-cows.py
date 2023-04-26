class Solution:
    def getHint(self, secret: str, guess: str) -> str:
        count = Counter()
        a, b = 0, 0
        for s, g in zip(secret, guess):
            if s == g:
                a += 1
            else:
                if count[g] < 0:
                    b += 1
                count[g] += 1
                if count[s] > 0:
                    b += 1
                count[s] -= 1
        return f"{a}A{b}B"