class Solution:
    def maxRepOpt1(self, text: str) -> int:
        text += ' '
        count = Counter(text)
        start, ans = 0, 1
        for i, ch in enumerate(text):
            if ch == text[start]:
                continue
            j = i + 1
            while j < len(text) and text[j] == text[start]:
                j += 1
            cnt = j - start - 1
            if cnt < count[text[start]]:
                cnt += 1
            ans = max(ans, cnt)
            start = i
        return ans