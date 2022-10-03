class Solution:
    def minAddToMakeValid(self, s: str) -> int:
        open = close = 0
        for c in s:
            if c == '(':
                open += 1
            elif open:
                open -= 1
            else:
                close += 1
        return open + close