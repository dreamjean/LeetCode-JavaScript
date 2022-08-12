class Solution:
    def minimumRefill(self, plants: List[int], capacityA: int, capacityB: int) -> int:
        ans, l, r, currA, currB = 0, 0, len(plants) - 1, capacityA, capacityB
        while (l < r):
            if currA < plants[l]:
                ans += 1
                currA = capacityA
            if currB < plants[r]:
                ans += 1
                currB = capacityB
            currA -= plants[l]
            currB -= plants[r]
            l += 1
            r -= 1
        return ans + (1 if l == r and max(currA, currB) < plants[l] else 0)