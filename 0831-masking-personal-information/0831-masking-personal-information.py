class Solution:
    def maskPII(self, s: str) -> str:
        country = ['', '+*-', '+**-', '+***-']
        at = s.find('@')
        if at >= 0:
            return (s[0] + "*" * 5 + s[at - 1:]).lower()
        s = ''.join(x for x in s if x.isdigit())
        return country[len(s) - 10] + '***-***-' + s[-4:]
          