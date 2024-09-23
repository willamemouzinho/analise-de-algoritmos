function verificacaoDePalindromo(string) {
    let j = string.length - 1
    for (let i = 0; i < string.length; i++) {
      if (string[i] !== string[j]) {
        // console.log(string[i], string[j]);
        return 'Não'
      }
      j--
    }
  
    return 'Sim'
  }
  
  console.log(verificacaoDePalindromo("ararah"))