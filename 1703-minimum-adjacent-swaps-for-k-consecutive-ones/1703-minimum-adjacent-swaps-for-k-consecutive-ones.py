class Solution:
    def minMoves(self, nums: List[int], k: int) -> int:
        pos = [i for i, num in enumerate(nums) if num]
        mid, cnt0 = k // 2, 0
        for i in range(1, k):
            cnt0 += (pos[i] - pos[i - 1] - 1) * min(i, k - i)
            
        ans = cnt0
        for i in range(k, len(pos)):
            cnt0 += pos[i] - pos[i - mid] - (pos[i - k + mid] - pos[i- k])
            ans = min(ans, cnt0)
        return ans