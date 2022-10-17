class Solution:
    def totalFruit(self, fruits: List[int]) -> int:
        fruitA = fruitB = cntB = curr_max = ans = 0
        for fruit in fruits:
            if fruit == fruitA or fruit == fruitB:
                curr_max += 1
            else:
                curr_max = cntB + 1
            if fruit == fruitB:
                cntB += 1
            else:
                fruitA, fruitB, cntB = fruitB, fruit, 1
            ans = max(ans, curr_max)
        return ans
            