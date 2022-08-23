class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        temp = list(map(int, str(n)))
        return math.prod(temp) - sum(temp)