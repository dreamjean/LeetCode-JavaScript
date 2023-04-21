class Solution:
    def rotatedDigits(self, n: int) -> int:
        def isGood(n):
            good = False
            while n:
                x = n % 10
                if x == 3 or x == 4 or x == 7:
                    return False
                if x == 2 or x == 5 or x == 6 or x == 9:
                    good = True
                n //= 10
            return good
          
        
        ans = 0
        while n: 
            ans += isGood(n)
            n -= 1
        return ans