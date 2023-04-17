class Solution:
    def numWays(self, words: List[str], target: str) -> int:
        n, t, mod = len(words[0]), len(target), 10**9 + 7
        memo = [1] + [0] * t 
        for i in range(n):
            count = Counter(word[i] for word in words)
            for j in range(min(i + 1, t), 0, -1):
                memo[j] = (memo[j] + count[target[j - 1]] * memo[j - 1]) % mod
        return memo[-1]
      
