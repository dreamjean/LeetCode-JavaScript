class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1:
            return s
        ans = [''] * numRows
        pos, direction = 0, False
        
        for i, ch in enumerate(s):
            if i % (numRows - 1) == 0:
                direction = not direction
            ans[pos] += ch
            pos = pos + 1 if direction else pos - 1
        return ''.join(ans)
                