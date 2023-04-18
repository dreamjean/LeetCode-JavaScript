class Solution:
    def boxDelivering(self, boxes: List[List[int]], portsCount: int, maxBoxes: int, maxWeight: int) -> int:
        n = len(boxes)
        memo = [0] + [inf] * n
        j = lastJ = need = 0
        for i, [ports, weight] in enumerate(boxes):
            while j < n and maxBoxes > 0 and boxes[j][1] <= maxWeight:                
                maxBoxes -= 1
                maxWeight -= boxes[j][1]
                if j == 0 or boxes[j][0] != boxes[j - 1][0]:
                    lastJ = j
                    need += 1
                j += 1
            
            memo[j] = min(memo[j], memo[i] + need + 1)
            memo[lastJ] = min(memo[lastJ], memo[i] + need)
            
            maxBoxes += 1
            maxWeight += weight
            
            if i == n - 1 or ports != boxes[i + 1][0]:
                need -= 1
        
        return memo[-1]