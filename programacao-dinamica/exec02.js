let contadorRecurssivo = 0
let contadorDinamico = 0
const cache = {}

function numeroDeCaminhosEmUmaGradeRecurssivo(m, n) {
  contadorRecurssivo++
  if (m <= 1 || n <= 1) {
    return 1
  }

  return (
    numeroDeCaminhosEmUmaGradeRecurssivo(m - 1, n) +
    numeroDeCaminhosEmUmaGradeRecurssivo(m, n - 1)
  )
}

function numeroDeCaminhosEmUmaGradeDinamico(m, n) {
  if (m <= 1 || n <= 1) {
    return 1
  }

  if (cache[`${m},${n}`]) {
    return cache[`${m},${n}`]
  }

  contadorDinamico++

  cache[`${m},${n}`] =
    numeroDeCaminhosEmUmaGradeDinamico(m - 1, n) +
    numeroDeCaminhosEmUmaGradeDinamico(m, n - 1)

  return cache[`${m},${n}`]
}

// -- TESTE --
const [m, n] = [9, 9]

console.log(
  `entrada = (${m}, ${n}), saída = ${numeroDeCaminhosEmUmaGradeRecurssivo(
    m,
    n
  )}`
)
console.log(
  `entrada = (${m}, ${n}), saída = ${numeroDeCaminhosEmUmaGradeDinamico(m, n)}`
)
console.log('\n')
console.log({ contadorRecurssivo })
console.log({ contadorDinamico })
console.log({ cache })
