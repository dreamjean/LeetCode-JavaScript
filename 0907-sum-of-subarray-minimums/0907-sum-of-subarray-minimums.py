class Solution:
    def sumSubarrayMins(self, arr: List[int]) -> int:
        arr.append(-1)
        ans, st = 0, [-1]
        for r, num in enumerate(arr):
            while len(st) > 1 and arr[st[-1]] >= num:
                l = st.pop()
                ans += arr[l] * (l - st[-1]) * (r - l)
            st.append(r)
        return ans % (10**9 + 7)