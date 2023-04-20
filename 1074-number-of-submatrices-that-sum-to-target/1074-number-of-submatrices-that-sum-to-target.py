class Solution:
    def numSubmatrixSumTarget(self, matrix: List[List[int]], target: int) -> int:
        m, n, ans = len(matrix), len(matrix[0]), 0
        for row in matrix:
            for j in range(n - 1):
                row[j + 1] += row[j]
        for k in range(n):
            for j in range(k, n):
                d = defaultdict(int)
                d[0], s = 1, 0
                for i in range(m):
                    s += matrix[i][j] - (0 if k == 0 else matrix[i][k - 1])
                    ans += d[s - target]
                    d[s] += 1
        return ans