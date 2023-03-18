class BrowserHistory:

    def __init__(self, homepage: str):
        self.history = [homepage]
        self.future = []

    def visit(self, url: str) -> None:
        self.history.append(url)
        self.future = []

    def back(self, steps: int) -> str:
        while steps and len(self.history) > 1:
            top = self.history.pop()
            self.future.append(top)
            steps -= 1
        return self.history[-1]

    def forward(self, steps: int) -> str:
        while steps and len(self.future):
            top = self.future.pop()
            self.history.append(top)
            steps -= 1
        return self.history[-1]


# Your BrowserHistory object will be instantiated and called as such:
# obj = BrowserHistory(homepage)
# obj.visit(url)
# param_2 = obj.back(steps)
# param_3 = obj.forward(steps)