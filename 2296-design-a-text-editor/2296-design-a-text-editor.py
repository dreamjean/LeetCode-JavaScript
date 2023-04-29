class TextEditor:

    def __init__(self):
        self.left = []
        self.right = []

    def addText(self, text: str) -> None:
        self.left += list(text)

    def deleteText(self, k: int) -> int:
        cnt = 0
        while self.left and cnt < k:
            self.left.pop()
            cnt += 1
        return cnt

    def cursorLeft(self, k: int) -> str:
        while self.left and k:
            self.right.append(self.left.pop())
            k -= 1
        return ('').join(self.left[max(len(self.left)-10, 0):])

    def cursorRight(self, k: int) -> str:
        while self.right and k:
            self.left.append(self.right.pop())
            k -= 1
        return ('').join(self.left[max(len(self.left)-10, 0):])
        


# Your TextEditor object will be instantiated and called as such:
# obj = TextEditor()
# obj.addText(text)
# param_2 = obj.deleteText(k)
# param_3 = obj.cursorLeft(k)
# param_4 = obj.cursorRight(k)