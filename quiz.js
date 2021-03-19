const readlineSync = require('readline-sync')
const chalk = require('chalk')





const question1 = readlineSync.question(`Question 1: Le C++ est un:\n
1: langage\n 
2: compilateur`, { noEchoBack: true, mask: '' })
const question2 = readlineSync.question(`Question 2: TypeScript est une évolution de Javascript:\n
1: Vrai\n
2: Faux`, { noEchoBack: true, mask: '' })
const question3 = readlineSync.question(`Question 3: Lire les cours avant de faire les exercices est inutile:\n
1: Vrai\n
2: Faux `, { noEchoBack: true, mask: '' })
const question4 = readlineSync.question(`Question 4: react.js a été developpé par Google:\n
1: Vrai\n
2: Faux`, { noEchoBack: true, mask: '' })
const question5 = readlineSync.question(`Question 5: Ethereum est une blockchain publique:\n
1: Vrai\n
2: Faux`, { noEchoBack: true, mask: '' })




const goodInput1 = '1'
const goodInput2 = '1'
const goodInput3 = '2'
const goodInput4 = '2'
const goodInput5 = '1'


let counter = 0
if (goodInput1 === question1) {
  counter++
}
if (goodInput2 === question2) {
  counter++
}
if (goodInput3 === question3) {
  counter++
}
if (goodInput4 === question4) {
  counter++
}
if (goodInput5 === question5) {
  counter++
}

console.log(`\n\nVotre total de bonnes réponses est :${counter}/5`)


