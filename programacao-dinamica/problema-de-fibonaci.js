// Função Fibonacci usando programação dinâmica com memoization
function fibonacciDP(n, memo = {}) {
  console.log({ n, memo })
  // Se o valor já foi calculado, retorná-lo
  if (n in memo) {
    return memo[n]
  }

  if (n <= 1) {
    return n
  }

  // Calcula e armazena o resultado em 'memo'
  memo[n] = fibonacciDP(n - 1, memo) + fibonacciDP(n - 2, memo)
  return memo[n]
}

// Exemplo de uso
console.log(fibonacciDP(10)) // Saída: 55
