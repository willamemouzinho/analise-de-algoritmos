// Função de busca de força bruta para correspondência de string
function bruteForceSearch(text, pattern) {
  const textLength = text.length
  const patternLength = pattern.length

  // Percorre todas as posições possíveis na string 'text'
  for (let i = 0; i <= textLength - patternLength; i++) {
    let match = true

    // Verifica se o padrão 'pattern' coincide com a substring em 'text'
    for (let j = 0; j < patternLength; j++) {
      if (text[i + j] !== pattern[j]) {
        match = false
        break
      }
    }

    // Se todas as letras do padrão coincidem, retorna a posição
    if (match) {
      return i // Retorna o índice da primeira correspondência
    }
  }

  return -1 // Retorna -1 se não houver correspondência

  // let cont = 0
  // for (let i = 0; i < string.length - substring.length; i++) {
  //   if (string[i] === substring[0]) {
  //     let tmp = i
  //     for (let j = 0; j < substring.length; j++) {
  //       if (substring[j] === string[tmp]) {
  //         cont++
  //       }
  //       tmp++
  //     }

  //     if (cont === substring.length) {
  //       return i
  //     }
  //   }
  // }

  // return -1
}

// Exemplo de uso
const text = 'este é um exemplo de busca por padrão'
const pattern = 'busca'
const result = bruteForceSearch(text, pattern)

if (result !== -1) {
  console.log(`Padrão encontrado na posição: ${result}`)
} else {
  console.log('Padrão não encontrado.')
}
