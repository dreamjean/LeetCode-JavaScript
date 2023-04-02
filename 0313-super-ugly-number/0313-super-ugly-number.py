class Solution:
    def nthSuperUglyNumber(self, n: int, primes: List[int]) -> int:
        indexs, nums = [0] * len(primes), [1]
        while len(nums) < n:
            nums.append(min([p * nums[indexs[i]] for i, p in enumerate(primes)]))
            for i, p in enumerate(primes):
                if p * nums[indexs[i]] == nums[-1]:
                    indexs[i] += 1
        return nums[-1]