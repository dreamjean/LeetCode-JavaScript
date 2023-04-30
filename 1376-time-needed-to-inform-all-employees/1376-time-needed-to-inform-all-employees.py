class Solution:
    def numOfMinutes(self, n: int, headID: int, manager: List[int], informTime: List[int]) -> int:
        def dfs(i, manager, informTime):
            if manager[i] != -1:
                informTime[i] += dfs(manager[i], manager, informTime)
                manager[i] = -1
            return informTime[i]
          
        
        return max(dfs(i, manager, informTime) for i in range(n))