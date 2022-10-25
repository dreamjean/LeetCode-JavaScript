class Solution:
    def numsSameConsecDiff(self, n: int, k: int) -> List[int]:
        nums = [i for i in range(1, 10)]
        while n - 1:
            curr = []
            for x in nums:
                y = x % 10
                if y + k < 10: 
                    curr.append(x * 10 + y + k)
                if k and y - k >= 0:
                    curr.append(x * 10 + y - k)
            nums = curr
            n -= 1
        return nums