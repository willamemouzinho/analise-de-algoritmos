// Função principal do Quick Sort
function quickSort(arr) {
  // Se o array tem 1 ou nenhum elemento, já está ordenado
  if (arr.length <= 1) {
    return arr
  }

  // Escolhendo o pivô (aqui usamos o último elemento)
  const pivot = arr[arr.length - 1]
  const left = []
  const right = []

  // Particionando o array em dois: menores que o pivô e maiores que o pivô
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  // Recursivamente ordenando os arrays "left" e "right" e combinando com o pivô
  return [...quickSort(left), pivot, ...quickSort(right)]
}

// Exemplo de uso
const arr = [38, 27, 43, 3, 9, 82, 10]
console.log('Array original:', arr)
const sortedArray = quickSort(arr)
console.log('Array ordenado:', sortedArray)
