class Solution:
    def boxDelivering(self, boxes: List[List[int]], portsCount: int, maxBoxes: int, maxWeight: int) -> int:
        n = len(boxes)
        dp = [0] + [float('inf')] * n
        need = last_j = j = 0
        for i in range(n):
            while j < n and maxBoxes > 0 and maxWeight >= boxes[j][1]:
                maxBoxes -= 1
                maxWeight -= boxes[j][1]
                if j == 0 or boxes[j - 1][0] != boxes[j][0]:
                    last_j = j
                    need += 1
                j += 1
            dp[j] = min(dp[j], dp[i] + need + 1)
            dp[last_j] = min(dp[last_j], dp[i] + need)
            
            maxBoxes += 1
            maxWeight += boxes[i][1]
            if i == n - 1 or boxes[i][0] != boxes[i + 1][0]:
                need -= 1
        return dp[-1]