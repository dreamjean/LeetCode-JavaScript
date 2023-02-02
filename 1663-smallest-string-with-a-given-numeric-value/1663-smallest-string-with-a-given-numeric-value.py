class Solution:
    def getSmallestString(self, n: int, k: int) -> str:
        k -= n
        curr = 0
        ans = ''
        
        while n:
            curr = min(25, k)
            ans = chr(curr + 97) + ans
            k -= curr
            n -= 1
        return ans