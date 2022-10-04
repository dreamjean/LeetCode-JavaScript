class Solution:
    def cellsInRange(self, s: str) -> List[str]:
        c1, r1, _, c2, r2 = map(ord, s)
        return [chr(c) + chr(r) for c in range(c1, c2 + 1) for r in range(r1, r2 + 1)]