function verificacaoDeAnagramas(string1, string2) {
    const qtdPorCaractereString1 = []
    if (string1.length !== string2.length) {
      return 'Não'
    }
    for (let i = 0; i < string1.length; i++) {
      console.log(qtdPorCaractereString1[string1[i]])
      if (!qtdPorCaractereString1[string1[i]]) {
        qtdPorCaractereString1.push({
          [string1[i]]: 1,
        })
      } else {
        console.log('oi')
        qtdPorCaractereString1[string1[i]]++
      }
    }
  
    return qtdPorCaractereString1
}

  console.log(verificacaoDeAnagramas('arara', 'arara'))
