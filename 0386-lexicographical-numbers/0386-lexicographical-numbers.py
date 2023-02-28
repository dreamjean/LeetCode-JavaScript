class Solution:
    def lexicalOrder(self, n: int) -> List[int]:
        def dfs(start, end):
            for i in range(start, min(n + 1, end + 1)):
                ans.append(i)
                dfs(i * 10, i * 10 + 9)
          
          
        ans = []
        dfs(1, 9)
        return ans