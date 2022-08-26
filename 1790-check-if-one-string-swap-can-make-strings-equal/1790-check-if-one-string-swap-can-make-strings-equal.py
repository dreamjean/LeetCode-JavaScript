class Solution:
    def areAlmostEqual(self, s1: str, s2: str) -> bool:
        diff = ((x, y) for x, y in zip(s1, s2) if x != y)
        return next(diff, ())[::-1] == next(diff, ()) and not any(diff)
        