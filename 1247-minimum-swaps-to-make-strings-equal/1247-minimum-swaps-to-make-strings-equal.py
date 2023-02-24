class Solution:
    def minimumSwap(self, s1: str, s2: str) -> int:
        x = y = 0
        for c1, c2 in zip(s1, s2):
            if c1 == c2:
                continue
            if c1 == 'x':
                x += 1
            else:
                y += 1
        return -1 if (x + y) & 1 else (x + 1) // 2 + (y + 1) // 2 
                    