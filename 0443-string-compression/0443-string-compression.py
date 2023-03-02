class Solution:
    def compress(self, chars: List[str]) -> int:
        n = len(chars)
        start = i = 0
        while i < n:
            char, count = chars[i], 0
            while i < n and chars[i] == char:
                i += 1
                count += 1
            chars[start] = char
            start += 1
            if count > 1:
                for ch in str(count):
                    chars[start] = ch
                    start += 1
        return start