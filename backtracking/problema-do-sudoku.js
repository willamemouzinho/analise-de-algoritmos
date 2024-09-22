// Função para verificar se é seguro colocar um número no tabuleiro
function isSafeSudoku(board, row, col, num) {
  // Verificar a linha
  for (let x = 0; x < 9; x++) {
    if (board[row][x] === num) {
      return false
    }
  }

  // Verificar a coluna
  for (let x = 0; x < 9; x++) {
    if (board[x][col] === num) {
      return false
    }
  }

  // Verificar a subgrade 3x3
  const startRow = row - (row % 3)
  const startCol = col - (col % 3)
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i + startRow][j + startCol] === num) {
        return false
      }
    }
  }

  return true
}

// Função principal que resolve o Sudoku usando backtracking
function solveSudoku(board) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      // Procurar uma célula vazia
      if (board[row][col] === 0) {
        // Tentar números de 1 a 9
        for (let num = 1; num <= 9; num++) {
          if (isSafeSudoku(board, row, col, num)) {
            // Colocar o número no tabuleiro
            board[row][col] = num

            // Recursivamente tentar preencher o restante do tabuleiro
            if (solveSudoku(board)) {
              return true
            }

            // Se falhar, desfazer a escolha (backtracking)
            board[row][col] = 0
          }
        }

        // Se nenhum número é válido, voltar atrás
        return false
      }
    }
  }
  return true // Sudoku resolvido
}

// Exemplo de uso: Tabuleiro de Sudoku a ser resolvido
const board = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
]

solveSudoku(board)
console.log(board)
