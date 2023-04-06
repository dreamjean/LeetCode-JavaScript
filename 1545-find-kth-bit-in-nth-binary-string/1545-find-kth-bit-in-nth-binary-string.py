class Solution:
    def findKthBit(self, n: int, k: int) -> str:
        def invert(s):
            return '1' if s == '0' else '0'
          
          
        if n == 1:
            return '0'
        mid = 1 << (n - 1)
        if k == mid:
            return '1'
        if k < mid:
            return self.findKthBit(n - 1, k)
        k = 2 * mid - k
        return invert(self.findKthBit(n - 1, k))