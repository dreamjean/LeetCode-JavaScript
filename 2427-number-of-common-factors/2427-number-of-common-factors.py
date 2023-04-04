class Solution:
    def commonFactors(self, a: int, b: int) -> int:
        ans = 1
        for i in range(2, gcd(a, b) + 1):
            ans += a % i == 0 and b % i == 0
        return ans