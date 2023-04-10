class Solution:
    def shortestSubarray(self, nums: List[int], k: int) -> int:
        s = list(accumulate(nums, initial=0))
        dq = deque()
        ans = inf
        for i, num in enumerate(s):
            while dq and num - s[dq[0]] >= k:
                ans = min(ans, i - dq.popleft())
            while dq and num <= s[dq[-1]]:
                dq.pop()
            dq.append(i)
        return ans if ans < inf else -1