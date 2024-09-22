// Função para verificar se é seguro colocar a rainha em (row, col)
function isSafe(board, row, col, N) {
  // Verificar a coluna acima
  for (let i = 0; i < row; i++) {
    if (board[i][col] === 'Q') {
      return false
    }
  }

  // Verificar a diagonal superior esquerda
  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === 'Q') {
      return false
    }
  }

  // Verificar a diagonal superior direita
  for (let i = row, j = col; i >= 0 && j < N; i--, j++) {
    if (board[i][j] === 'Q') {
      return false
    }
  }

  return true
}

// Função principal que resolve o problema das N Rainhas usando backtracking
function solveNQueens(board, row, N, solutions) {
  if (row === N) {
    // Se todas as rainhas foram colocadas, armazenar a solução
    const solution = board.map((r) => r.join(''))
    solutions.push(solution)
    return
  }

  // Tentar colocar a rainha em cada coluna da linha atual
  for (let col = 0; col < N; col++) {
    if (isSafe(board, row, col, N)) {
      // Colocar a rainha
      board[row][col] = 'Q'

      // Recursivamente tentar colocar a próxima rainha
      solveNQueens(board, row + 1, N, solutions)

      // Se falhar, remover a rainha (backtracking)
      board[row][col] = '.'
    }
  }
}

// Função que inicializa o tabuleiro e chama a solução
function nQueens(N) {
  const board = Array.from({ length: N }, () => Array(N).fill('.'))
  const solutions = []
  solveNQueens(board, 0, N, solutions)
  return solutions
}

// Exemplo de uso: Resolver o problema das 4 rainhas
console.log(nQueens(4))
