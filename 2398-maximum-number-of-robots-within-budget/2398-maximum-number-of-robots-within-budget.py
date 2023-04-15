class Solution:
    def maximumRobots(self, chargeTimes: List[int], runningCosts: List[int], budget: int) -> int:
        dq = deque()
        n = len(chargeTimes)
        j = s = 0
        for i, cost in enumerate(runningCosts):
            s += cost
            while dq and chargeTimes[dq[-1]] <= chargeTimes[i]:
                dq.pop()
            dq.append(i)
            if dq and chargeTimes[dq[0]] + s * (i - j + 1) > budget:
                if dq[0] == j:
                    dq.popleft()
                s -= runningCosts[j]
                j += 1
        return n - j