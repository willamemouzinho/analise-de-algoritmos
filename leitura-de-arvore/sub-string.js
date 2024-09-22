const readline = require('node:readline/promises')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

async function main() {
  // const string = await rl.question('Digite a string: ')
  // const subString = await rl.question('Digite a substring: ')
  // rl.close()

  const string = 'willame'
  const subString = 'll'
  let cont = 0

  for (let j = 0; j < string.length; j++) {
    const element = string[j]
    // console.log(element)
    if (element === subString[0]) {
      // console.log('primeiro caractere deu match:', element, subString[0])

      let tmp = j
      for (let i = 0; i < subString.length; i++) {
        // console.log({ string: string[tmp], sub_string: sub })
        if (subString[i] === string[tmp]) {
          cont++
        }

        tmp++
      }

      // console.log('não encontrado')
    }
  }

  if (cont === subString.length) {
    return console.log('encontrado!')
  }

  return console.log('não encontrado')
}

main()
