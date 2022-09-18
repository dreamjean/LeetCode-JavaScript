class Solution:
    def trap(self, height: List[int]) -> int:
        l, r, lm, rm, res = 0, len(height) - 1, 0, 0, 0
        while (l < r):
            lm = max(lm, height[l])
            rm = max(rm, height[r])
            if height[l] < height[r]:
                res += lm - height[l]
                l += 1
            else:
                res += rm - height[r]
                r -= 1
        return res
            