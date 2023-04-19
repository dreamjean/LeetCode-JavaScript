class Solution:
    def maxScore(self, cardPoints: List[int], k: int) -> int:
        s = sum(cardPoints[:k])
        ans, n = s, len(cardPoints)
        for i in range(1, k + 1):
            s += cardPoints[n - i] - cardPoints[k - i]
            ans = max(ans, s)
        return ans