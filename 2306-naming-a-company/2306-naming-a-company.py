class Solution:
    def distinctNames(self, ideas: List[str]) -> int:
        count = [set() for _ in range(26)]
        ans = 0
        
        for idea in ideas:
            count[ord(idea[0]) - ord('a')].add(idea[1:])
            
        for i in range(25):
            for j in range(i + 1, 26):
                a, b = count[i], count[j]
                m = len(a & b)
                ans += 2 * (len(a) - m) * (len(b) - m)
        return ans