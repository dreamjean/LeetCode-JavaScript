class Solution:
    def countDaysTogether(self, arriveAlice: str, leaveAlice: str, arriveBob: str, leaveBob: str) -> int:
        def dayOfYear(dates):
            days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
            m, d = dates.split('-')
            return sum(days[:int(m)-1]) + int(d)
          
          
        arrive = max(dayOfYear(arriveAlice), dayOfYear(arriveBob))
        leave = min(dayOfYear(leaveAlice), dayOfYear(leaveBob))
        return max(0, leave - arrive + 1)