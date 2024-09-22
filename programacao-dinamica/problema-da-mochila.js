// Função que resolve o Problema da Mochila usando programação dinâmica
function knapsack(weights, values, W) {
  const n = weights.length
  // Tabela para armazenar os valores máximos possíveis para cada capacidade
  const dp = Array(n + 1)
    .fill(0)
    .map(() => Array(W + 1).fill(0))

  // Preenchendo a tabela
  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= W; w++) {
      if (weights[i - 1] <= w) {
        // Escolhemos entre incluir ou não o item
        dp[i][w] = Math.max(
          dp[i - 1][w], // Não incluir o item
          dp[i - 1][w - weights[i - 1]] + values[i - 1] // Incluir o item
        )
      } else {
        // Se o item não cabe, mantemos o valor anterior
        dp[i][w] = dp[i - 1][w]
      }
    }
  }

  return dp[n][W] // O valor máximo que podemos obter com a capacidade W
}

// Exemplo de uso
const weights = [2, 3, 4, 5]
const values = [3, 4, 5, 6]
const capacity = 5

console.log(knapsack(weights, values, capacity)) // Saída: 7
