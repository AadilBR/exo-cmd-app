const readlineSync = require('readline-sync')
const chalk = require('chalk')

let counter = 0
let choix = ['1: langage', '2: compilateur']
let index = readlineSync.keyInSelect(choix, ' Le C++ est un: ')

switch (index) {

  case 0:
    console.log(chalk.green('Bravo'))
    counter++
    break
  case 1:
    console.log(chalk.red('Mauvaise réponse'))
    break

}
choix = ['1: Vrai', '2: Faux']
index = readlineSync.keyInSelect(choix, ' TypeScript est une évolution de Javascript:')

switch (index) {

  case 0:
    console.log(chalk.green('Bravo'))
    counter++
    break
  case 1:
    console.log(chalk.red('Mauvaise réponse'))
    break

}
choix = ['1: Vrai', '2: Faux']
index = readlineSync.keyInSelect(choix, ' Lire les cours avant de faire les exercices est inutile:')

switch (index) {

  case 0:
    console.log(chalk.red('Mauvaise réponse'))
    break
  case 1:
    console.log(chalk.green('Bravo'))
    counter++
    break

}
choix = ['1: Vrai', '2: Faux']
index = readlineSync.keyInSelect(choix, ' react.js a été developpé par Google:')

switch (index) {

  case 0:
    console.log(chalk.red('Mauvaise réponse'))
    break
  case 1:
    console.log(chalk.green('Bravo'))
    counter++
    break

}
choix = ['1: Vrai', '2: Faux']
index = readlineSync.keyInSelect(choix, 'Ethereum est une blockchain publique:')

switch (index) {

  case 0:
    console.log(chalk.green('Bravo'))
    counter++
    break
  case 1:
    console.log(chalk.red('Mauvaise réponse'))
    break

}
console.log(`\n\nVotre total de bonnes réponses est :${counter}/5`)