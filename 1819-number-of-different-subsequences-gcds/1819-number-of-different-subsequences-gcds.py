class Solution:
    def countDifferentSubsequenceGCDs(self, nums: List[int]) -> int:
        def gcd(a, b):
            return a if not b else gcd(b, a % b)
          
        
        seen, large = set(nums), max(nums) + 1
        ans = 0
        for i in range(1, large):
            g = 0
            for j in range(i, large, i):
                if j in seen:
                    g = gcd(j, g)
                if g == i:
                    break
            ans += 1 if g == i else 0
        return ans