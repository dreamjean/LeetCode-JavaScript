class Solution:
    def lexicalOrder(self, n: int) -> List[int]:
        def dfs(start, end):
            while start <= end and start <= n:
                ans.append(start)
                dfs(start * 10, start * 10 + 9)
                start += 1
          
          
        ans = []
        dfs(1, 9)
        return ans