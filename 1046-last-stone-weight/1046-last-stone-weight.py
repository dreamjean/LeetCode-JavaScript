class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        stones.sort()
        while len(stones) > 1:
            x = stones.pop() - stones.pop()
            stones.append(x)
            stones.sort()
        return stones[0]