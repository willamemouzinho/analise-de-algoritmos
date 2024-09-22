// Função gulosa para o problema do troco
function coinChange(coins, amount) {
  coins.sort((a, b) => b - a) // Ordena as moedas em ordem decrescente
  let count = 0
  let remaining = amount

  for (let i = 0; i < coins.length; i++) {
    while (remaining >= coins[i]) {
      remaining -= coins[i]
      count++
    }
  }

  return remaining === 0 ? count : -1 // Retorna -1 se não for possível dar o troco exato
}

// Exemplo de uso
const coins = [1, 5, 10, 25]
const amount = 63

console.log(coinChange(coins, amount)) // Saída: 6 (25 + 25 + 10 + 1 + 1 + 1)
