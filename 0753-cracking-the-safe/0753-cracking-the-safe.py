class Solution:
    def crackSafe(self, n: int, k: int) -> str:
        visited = set()
        ans = '0' * (n - 1)
        for i in range(k ** n):
            temp = ans[-n+1:] if n > 1 else ''
            for j in range(k - 1, -1, -1):
                if temp + str(j) not in visited:
                    visited.add(temp + str(j))
                    ans += str(j)
                    break
        return ans 