class Solution:
    def atMostNGivenDigitSet(self, digits: List[str], n: int) -> int:
        N = str(n)
        n_len, d_len = len(N), len(digits)
        res = sum(d_len ** i for i in range(1, n_len))
        i = 0
        while i < n_len:
            res += sum(digit < N[i] for digit in digits) * (d_len ** (n_len - i - 1))
            if N[i] not in digits:
                break
            i += 1
        return res + (i == n_len)
          