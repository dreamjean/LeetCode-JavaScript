class Solution:
    def substringXorQueries(self, s: str, queries: List[List[int]]) -> List[List[int]]:
        seen = {}
        n = len(s)
        for i in range(n):
            if s[i] == '0':
                seen.setdefault(0, [i, i]);
                continue
            num = 0
            for j in range(i, min(i + 30, n)):
                num = (num << 1) | int(s[j])
                seen.setdefault(num, [i, j])
        return [seen.get(a ^ b, [-1, -1]) for a, b in queries]