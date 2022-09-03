class Solution:
    def findKthBit(self, n: int, k: int) -> str:
        def invert(bit):
            return '1' if bit == '0' else '0'
          
          
        if n == 1:
            return '0'
          
        mid = 1 << (n-1)
        if mid == k:
            return '1'
        if mid > k:
            return self.findKthBit(n - 1, k)
        return invert(self.findKthBit(n - 1, mid*2 - k))