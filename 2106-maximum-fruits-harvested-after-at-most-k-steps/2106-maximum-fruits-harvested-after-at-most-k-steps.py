class Solution:
    def maxTotalFruits(self, fruits: List[List[int]], startPos: int, k: int) -> int:
        j = s = ans = 0
        for i, [pos, amount] in enumerate(fruits):
            s += amount
            while j <= i and min(abs(startPos - pos), abs(startPos - fruits[j][0])) + pos - fruits[j][0] > k:
                s -= fruits[j][1]
                j += 1
            ans = max(ans, s)
        return ans