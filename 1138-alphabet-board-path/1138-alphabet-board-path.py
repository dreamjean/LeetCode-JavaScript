class Solution:
    def alphabetBoardPath(self, target: str) -> str:
        indexs = [];
        x0, y0, ans = 0, 0, ''
        
        for ch in target:
            i = ord(ch) - ord('a')
            indexs.append([i // 5, i % 5])
        print(indexs)
        
        for x, y in indexs:
            if y0 > y: 
                ans += 'L' * (y0 - y)
            if x0 < x:
                ans += 'D' * (x - x0)
            if x0 > x:
                ans += 'U' * (x0 - x)
            if y0 < y:
                ans += 'R' * (y - y0)
            ans += '!'
            x0, y0 = x, y
            
        return ans