class Solution:
    def minCost(self, colors: str, neededTime: List[int]) -> int:
        ans, max_cost = 0, neededTime[0]
        for i in range(1, len(colors)):
            if colors[i - 1] == colors[i]:
                ans += min(max_cost, neededTime[i])
                max_cost = max(max_cost, neededTime[i])
            else:
                max_cost = neededTime[i]
        return ans