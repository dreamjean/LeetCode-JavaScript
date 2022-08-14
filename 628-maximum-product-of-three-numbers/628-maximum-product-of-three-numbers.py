class Solution:
    def maximumProduct(self, nums: List[int]) -> int:
        a = b = c = -float('inf')
        x = y = float('inf')
        for num in nums:
            if num > a:
                a, b, c = num, a, b
            elif num > b:
                b, c = num, b
            elif num > c:
                c = num
            if num < x:
                x, y = num, x
            elif num < y:
                y = num
        return max(a * b * c, a * x * y)