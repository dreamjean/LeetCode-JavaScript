class Solution:
    def fib(self, n: int) -> int:
        if not n:
            return 0
        
        a, b = 0, 1
        for i in range(2, n + 1):
            a, b = b, a + b
        return b
        