// Função principal do Merge Sort
function mergeSort(arr) {
  // Se o array tem 1 ou nenhum elemento, já está ordenado
  if (arr.length <= 1) {
    return arr
  }

  // Dividindo o array ao meio
  const mid = Math.floor(arr.length / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)
  // console.log({ mid, left, right })

  // Recursivamente ordenando as duas metades
  const sortedLeft = mergeSort(left)
  const sortedRight = mergeSort(right)

  // Combinando as duas metades ordenadas
  // console.log({ sortedLeft, sortedRight })
  return merge(sortedLeft, sortedRight)
}

// Função para combinar (intercalar) dois arrays ordenados
function merge(left, right) {
  let result = []
  let i = 0
  let j = 0

  // Intercalando os dois arrays ordenados
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i])
      i++
    } else {
      result.push(right[j])
      j++
    }
  }

  // Adiciona o restante dos elementos do array esquerdo, se houver
  while (i < left.length) {
    result.push(left[i])
    i++
  }

  // Adiciona o restante dos elementos do array direito, se houver
  while (j < right.length) {
    result.push(right[j])
    j++
  }

  // console.log({ result })
  return result
}

// Exemplo de uso
const arr = [4, 3, 1, 2, 1]
// const arr = [4, 3, 2, 1]
// const arr = [38, 27, 43, 3, 9, 82, 10]
console.log('Array original:', arr)
const sortedArray = mergeSort(arr)
console.log('Array ordenado:', sortedArray)
