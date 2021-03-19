const readlineSync = require('readline-sync')
const chalk = require('chalk')







const input = readlineSync.question('Guess number ?')
if (isNaN(input)) {
  console.log(`Error: ${input} is not a number.`)
}
const nb = Number(input)



while (!secretNumber) {

  if (input < secretNumber) {
    console.log(chalk.bgRed(`Nombre trop petit`))

  } else if (input > secretNumber) {
    console.log(chalk.bgRed(`Nombre trop grand`))

  } else if (input === secretNumber) {
    console.log(chalk.bgGreen('Bravo !'))
  }
}






console.log(secretNumber)
