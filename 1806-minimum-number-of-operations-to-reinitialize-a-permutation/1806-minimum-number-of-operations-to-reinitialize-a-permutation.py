class Solution:
    def reinitializePermutation(self, n: int) -> int:
        count, i = 0, 1
        while count == 0 or i > 1:
            i = i * 2 % (n - 1)
            count += 1
        return count