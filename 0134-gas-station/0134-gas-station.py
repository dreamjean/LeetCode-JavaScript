class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        start = tank = total = 0
        for i in range(len(gas)):
            curr = gas[i] - cost[i]
            tank += curr
            total += curr
            if tank < 0:
                start = i + 1
                tank = 0
        return -1 if total < 0 else start