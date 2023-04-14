class Solution:
    def maxNumOfSubstrings(self, s: str) -> List[str]:
        start = [inf] * 26
        end = [-1] * 26
        ans = []
        n, a, right = len(s), ord('a'), -1
        for i in range(n):
            idx = ord(s[i]) - a
            start[idx] = min(start[idx], i)
            end[idx] = i
            
        for i in range(n):
            idx = ord(s[i]) - a
            if start[idx] != i:
                continue
            new_right = self.checkSubstring(i, end[idx], s, start, end)
            if new_right != -1:
                if i > right:
                    ans.append('')
                right = new_right
                ans[-1] = s[i:right+1]
        return ans
    
    
    def checkSubstring(self, l, r, s, start, end):
        j, right = l, r
        while j <= right:
            idx = ord(s[j]) - ord('a')
            if start[idx] < l:
                return -1
            right = max(right, end[idx])
            j += 1
        return right
      
