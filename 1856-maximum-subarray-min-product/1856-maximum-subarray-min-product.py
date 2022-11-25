class Solution:
    def maxSumMinProduct(self, nums: List[int]) -> int:
        nums.append(0)
        stack = [(-1, 0)]
        ans, running_sum = 0, 0
        for num in nums:
            while stack and stack[-1][0] >= num:
                min_val = stack.pop()[0]
                product = min_val * (running_sum - stack[-1][1])
                ans = max(ans, product)
            running_sum += num
            stack.append([num, running_sum])
        return ans % (10 ** 9 + 7)