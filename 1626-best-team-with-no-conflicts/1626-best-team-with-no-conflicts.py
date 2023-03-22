class Solution:
    def bestTeamScore(self, scores: List[int], ages: List[int]) -> int:
        person = sorted(zip(scores, ages))
        n = len(person)
        dp = [0] * n
        for i in range(n):
            for j in range(i):
                if person[j][1] <= person[i][1]:
                    dp[i] = max(dp[i], dp[j])
            dp[i] += person[i][0]
        return max(dp)