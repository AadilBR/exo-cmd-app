const readlineSync = require('readline-sync')

if (process.argv.length !== 2) {
  console.log(`usage: node majorityTest`)
  process.exit(1)
}

const userFirstname = readlineSync.question('May I have your name? ')
const userSurname = readlineSync.question('May I have your surname? ')
const userAge = readlineSync.question('May I have your age? ')

if (isNaN(userAge)) {
  console.log(`Error: ${userAge} is not a number.`)
  process.exit(1)
}
const age = Number(userAge)

const majorityTest = (firstname, surname, age) => {

  if (age < 18) {
    console.log(`Désolé, ${firstname} ${surname}, vous êtes mineur, vous ne pouvez pas voter`)
  } else {
    console.log(`${firstname} ${surname}, vous êtes majeur, vous pouvez voter`)
  }
}


majorityTest(userFirstname, userSurname, age)

