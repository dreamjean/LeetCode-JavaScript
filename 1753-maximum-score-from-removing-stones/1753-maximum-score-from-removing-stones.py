class Solution:
    def maximumScore(self, a: int, b: int, c: int) -> int:
        s = a + b + c
        mx = max(a, b, c)
        
        return s - mx if s < mx * 2 else s // 2