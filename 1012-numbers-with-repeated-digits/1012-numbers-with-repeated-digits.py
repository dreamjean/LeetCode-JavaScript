class Solution:
    def numDupDigitsAtMostN(self, n: int) -> int:
        seen = set()
        digits = list(map(int, str(n + 1)))
        m = len(digits)
        count = sum(9 * perm(9, i) for i in range(m - 1))
        for i, digit in enumerate(digits):
            for j in range(i == 0, digit):
                if j not in seen:
                    count += perm(9 - i, m - i - 1)
            if digit in seen:
                break
            seen.add(digit)
        return n - count