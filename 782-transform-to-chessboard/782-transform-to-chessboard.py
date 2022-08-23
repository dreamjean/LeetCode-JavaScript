class Solution:
    def movesToChessboard(self, board: List[List[int]]) -> int:
        n = len(board)
        if any(board[0][0]^board[i][0]^board[0][j]^board[i][j] for i in range(n) for j in range(n)):
            return -1
        if not n // 2 <= sum(board[0]) <= (n + 1) // 2:
            return -1
        if not n // 2 <= sum(board[i][0] for i in range(n)) <= (n + 1) //2:
            return -1
          
        col = sum(board[0][i] == i % 2 for i in range(n))
        row = sum(board[i][0] == i % 2 for i in range(n))
        if n % 2:
            if col % 2: 
                col = n - col
            if row % 2:
                row = n - row
        else:
            col = min(col, n - col)
            row = min(row, n - row)
            
        return (row + col) // 2