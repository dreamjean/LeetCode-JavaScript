class Solution:
    def nthMagicalNumber(self, n: int, a: int, b: int) -> int:
        def gcd(a, b):
            if not b:
                return a
            return gcd(b, a % b)
        
        
        lcm = a * b / gcd(a, b)
        lo, hi = 2, 10**14
        while lo < hi:
            mid = (lo + hi) >> 1
            if mid // a + mid // b - mid // lcm < n:
                lo = mid + 1
            else:
                hi = mid
        return lo % (10**9 + 7)