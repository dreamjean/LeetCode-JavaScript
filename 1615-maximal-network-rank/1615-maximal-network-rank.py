class Solution:
    def maximalNetworkRank(self, n: int, roads: List[List[int]]) -> int:
        connected = [[0] * n for _ in range(n)]
        cnt = [0] * n
        ans = 0
        for a, b in roads:
            cnt[a] += 1
            cnt[b] += 1
            connected[a][b] = connected[b][a] = 1
        
        return max(cnt[i] + cnt[j] - connected[i][j] for i in range(n) for j in range(i+1, n))
        