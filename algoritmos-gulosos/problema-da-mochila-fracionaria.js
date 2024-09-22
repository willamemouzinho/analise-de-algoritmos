// Função para resolver o Problema da Mochila Fracionária usando algoritmo guloso
function fractionalKnapsack(weights, values, capacity) {
  const n = weights.length
  const items = []

  // Calcula a relação valor/peso para cada item
  for (let i = 0; i < n; i++) {
    items.push({
      weight: weights[i],
      value: values[i],
      ratio: values[i] / weights[i],
    })
  }

  // Ordena os itens pela relação valor/peso (maior para menor)
  items.sort((a, b) => b.ratio - a.ratio)

  let totalValue = 0
  let remainingCapacity = capacity

  // Escolhe os itens de forma gulosa
  for (let i = 0; i < n && remainingCapacity > 0; i++) {
    if (items[i].weight <= remainingCapacity) {
      // Se o item cabe inteiro, pega ele todo
      totalValue += items[i].value
      remainingCapacity -= items[i].weight
    } else {
      // Caso contrário, pega a fração que cabe
      totalValue += items[i].value * (remainingCapacity / items[i].weight)
      break // Mochila cheia
    }
  }

  return totalValue
}

// Exemplo de uso
const weights = [10, 20, 30]
const values = [60, 100, 120]
const capacity = 50

console.log(fractionalKnapsack(weights, values, capacity)) // Saída: 240
