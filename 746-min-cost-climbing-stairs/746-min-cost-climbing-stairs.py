class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        a, b = cost[0], cost[1]
        for i in range(2, len(cost)):
            temp = min(a, b) + cost[i]
            a, b = b, temp
        return min(a, b)