class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0: return False
        a, s = 0, x
        while s > 0:
            a = a * 10 + s % 10
            s = s // 10
        return a == x
        