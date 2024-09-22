// Função para calcular a distância de uma rota
function calculateRouteDistance(route, distances) {
  let totalDistance = 0

  // Soma as distâncias entre as cidades da rota
  for (let i = 0; i < route.length - 1; i++) {
    totalDistance += distances[route[i]][route[i + 1]]
  }

  // Adiciona a distância para voltar à cidade de origem
  totalDistance += distances[route[route.length - 1]][route[0]]

  return totalDistance
}

// Função para gerar todas as permutações de um array
function permute(arr) {
  if (arr.length <= 1) {
    return [arr]
  }

  let permutations = []

  // Para cada elemento, fixá-lo e gerar permutações do restante
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i]
    let remaining = arr.slice(0, i).concat(arr.slice(i + 1))
    let remainingPermuted = permute(remaining)

    for (let perm of remainingPermuted) {
      permutations.push([current].concat(perm))
    }
  }

  return permutations
}

// Função de força bruta para o problema do Caixeiro Viajante
function bruteForceTSP(cities, distances) {
  let allPermutations = permute(cities)
  let shortestRoute = null
  let shortestDistance = Infinity

  // Para cada permutação (rota), calcule a distância total
  for (let route of allPermutations) {
    let distance = calculateRouteDistance(route, distances)

    if (distance < shortestDistance) {
      shortestDistance = distance
      shortestRoute = route
    }
  }

  return { shortestRoute, shortestDistance }
}

// Exemplo de uso
const cities = [0, 1, 2, 3] // Cidades identificadas por números
const distances = [
  [0, 10, 15, 20],
  [10, 0, 35, 25],
  [15, 35, 0, 30],
  [20, 25, 30, 0],
]

const result = bruteForceTSP(cities, distances)
console.log('Menor rota:', result.shortestRoute)
console.log('Distância da menor rota:', result.shortestDistance)
