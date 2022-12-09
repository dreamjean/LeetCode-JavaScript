class Solution:
    def solveSudoku(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        def isValid(row, col, digit, board):
            for i in range(9):
                if board[row][i] == digit or board[i][col] == digit:
                    return False
                if board[(row // 3) * 3 + i // 3][(col // 3) * 3 + i % 3] == digit:
                    return False
            return True
          
          
        def backtrack(board):
            for i in range(9):
                for j in range(9):
                    if board[i][j] != '.':
                        continue
                    for c in '123456789':
                        if not isValid(i, j, c, board):
                            continue
                        board[i][j] = c
                        if backtrack(board):
                            return True
                        
                        board[i][j] = '.'
                        
                    return False
                  
            return True
          
      
        backtrack(board)