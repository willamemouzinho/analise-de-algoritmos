let contadorRecurssivo = 0
let contadorDinamico = 0
const cache = {}

function problemaDaEscadaRecurssivo(n) {
  contadorRecurssivo++
  if (n <= 1) {
    return 1
  }
  return problemaDaEscadaRecurssivo(n - 1) + problemaDaEscadaRecurssivo(n - 2)
}

function problemaDaEscadaDinamico(n) {
  if (n <= 1) {
    return 1
  }
  if (cache[n]) {
    return cache[n]
  }
  contadorDinamico++
  cache[n] = problemaDaEscadaDinamico(n - 1) + problemaDaEscadaDinamico(n - 2)
  return cache[n]
}

// -- TESTE --
const n = 10

console.log(`entrada = ${n}, saída = ${problemaDaEscadaRecurssivo(n)}`)
console.log(`entrada = ${n}, saída = ${problemaDaEscadaDinamico(n)}`)
console.log('\n')
console.log({ contadorRecurssivo })
console.log({ contadorDinamico })
console.log({ cache })
