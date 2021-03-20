const readlineSync = require('readline-sync')
const chalk = require('chalk')



if (isNaN(process.argv[2])) {
  console.log(chalk.bgYellow(`Error: ${process.argv[2]} is not a number.`))
  process.exit(1)
}
const secretNumber = Number(process.argv[2])

while (secretNumber) {

  const input = readlineSync.question('Guess number ?  ')
  if (isNaN(input)) {
    console.log(chalk.bgYellow(`Error: ${input} is not a number.`))
    continue
  }
  const nb = Number(input)

  if (nb < secretNumber) {
    console.log(chalk.bgRedBright(`Nombre trop petit`))

  } else if (nb > secretNumber) {
    console.log(chalk.bgRed(`Nombre trop grand`))

  } else if (nb === secretNumber) {
    console.log(chalk.bgGreen('Bravo !'))
    break
  }
}



