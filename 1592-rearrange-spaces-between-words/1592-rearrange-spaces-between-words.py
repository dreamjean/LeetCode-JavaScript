class Solution:
    def reorderSpaces(self, text: str) -> str:
        spaces = text.count(' ')
        words = text.split()
        n = len(words) - 1
        x, y = divmod(spaces, n) if n else (0, spaces)
        
        return (' ' * x).join(words) + ' ' * y
        
        
        
  