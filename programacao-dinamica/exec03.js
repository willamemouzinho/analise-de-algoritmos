let contadorRecurssivo = 0
let contadorDinamico = 0
const cache = {}

let i = 0
function problemaDaSomaDeSubconjunto_Recurssivo(vetor, alvo) {
  // contadorRecurssivo++
  // console.log({ vetor })
  // if (i == vetor.length) {
  //   return 1
  // }

  // return problemaDaSomaDeSubconjunto_Recurssivo(vetor[i++], alvo)
  const cache = {}

  for (let i = 0; i < vetor.length; i++) {
    const elemento = vetor[i]

    if (cache[elemento] !== undefined) {
      return [cache[elemento], i]
    }

    cache[alvo - elemento] = i
  }

  return null
}

function problemaDaSomaDeSubconjunto_Dinamico(m, n) {
  if (m <= 1 || n <= 1) {
    return 1
  }

  if (cache[`${m},${n}`]) {
    return cache[`${m},${n}`]
  }

  contadorDinamico++

  cache[`${m},${n}`] =
    problemaDaSomaDeSubconjunto_Dinamico(m - 1, n) +
    problemaDaSomaDeSubconjunto_Dinamico(m, n - 1)

  return cache[`${m},${n}`]
}

// -- TESTE --
const vetor = [1, 2, 3, 4]
const alvo = 3

console.log(
  `entrada = ([${vetor}], ${alvo}), saída = ${problemaDaSomaDeSubconjunto_Recurssivo(
    vetor,
    alvo
  )}`
)
// console.log(
//   `entrada = (${m}, ${n}), saída = ${problemaDaSomaDeSubconjunto_Dinamico(
//     m,
//     n
//   )}`
// )
// console.log('\n')
// console.log({ contadorRecurssivo })
// console.log({ contadorDinamico })
// console.log({ cache })
