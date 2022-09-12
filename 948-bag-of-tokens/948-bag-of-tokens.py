class Solution:
    def bagOfTokensScore(self, tokens: List[int], power: int) -> int:
        dq = deque(sorted(tokens))
        res = count = 0
        while dq and (dq[0] <= power or count):
            if dq[0] <= power:
                power -= dq.popleft()
                count += 1
            elif count:
                power += dq.pop()
                count -= 1
            res = max(res, count)
        return res