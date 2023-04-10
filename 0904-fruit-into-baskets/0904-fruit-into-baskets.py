class Solution:
    def totalFruit(self, fruits: List[int]) -> int:
        count, k = Counter(), 2
        j = ans = 0
        for i, fruit in enumerate(fruits):
            k -= count[fruit] == 0
            count[fruit] += 1
            while k < 0:
                count[fruits[j]] -= 1
                k += count[fruits[j]] == 0
                j += 1
            ans = max(ans, i - j + 1)
        return ans