const readlineSync = require('readline-sync')

if (process.argv.length !== 3) {
  console.log(`usage: node interMajorityTest`)
  process.exit(1)
}
const majorityAge = Number(process.argv[2])

const userFirstname = readlineSync.question('May I have your name ? ')
const userSurname = readlineSync.question('May I have your surname ? ')
const userAge = readlineSync.question('May I have your age ? ')

if (isNaN(userAge)) {
  console.log(`Error: ${userAge} is not a number.`)
  process.exit(1)
}
const age = Number(userAge)

const interMajorityTest = (firstname, surname, age) => {

  if (age < majorityAge) {
    console.log(`Désolé, ${firstname} ${surname}, vous êtes mineur, vous ne pouvez pas voter`)
  } else {
    console.log(`${firstname} ${surname}, vous êtes majeur, vous pouvez voter`)
  }
}


interajorityTest(userFirstname, userSurname, age)

