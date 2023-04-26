class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        count, ans = Counter(p), []
        n, a = len(p), ord('a')
        j, t = 0, n
        for i, ch in enumerate(s):
            if count[ch] > 0:
                t -= 1
            count[ch] -= 1
            if t == 0:
                ans.append(j)
            while i - j + 1 >= n:
                count[s[j]] += 1
                if count[s[j]] > 0:
                    t += 1
                j += 1
        return ans
                
                