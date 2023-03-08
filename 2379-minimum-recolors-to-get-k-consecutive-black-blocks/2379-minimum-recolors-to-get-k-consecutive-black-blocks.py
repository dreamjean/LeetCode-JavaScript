class Solution:
    def minimumRecolors(self, blocks: str, k: int) -> int:
        cntW, ans = 0, 100
        for i in range(len(blocks)):
            if blocks[i] == 'W':
                cntW += 1
            if i >= k and blocks[i-k] == 'W':
                cntW -= 1
            if i >= k - 1:
                ans = min(ans, cntW)
        return ans