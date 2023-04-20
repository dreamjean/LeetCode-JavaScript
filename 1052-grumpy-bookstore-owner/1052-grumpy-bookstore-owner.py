class Solution:
    def maxSatisfied(self, customers: List[int], grumpy: List[int], minutes: int) -> int:
        sum0 = sum1 = maxSum1 = 0
        for i, num in enumerate(customers):
            if grumpy[i] == 0:
                sum0 += num
            else:
                sum1 += num
            if i >= minutes and grumpy[i - minutes] == 1: 	
                sum1 -= customers[i - minutes]
            maxSum1 = max(maxSum1, sum1)
        return sum0 + maxSum1