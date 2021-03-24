
if (process.argv.length !== 3) {
  console.log(`usage: node sayMyName.js name`)
  process.exit(1)
}

const name = process.argv[2]
console.log(`Hello, ${name}`)


/* if (process.argv.length !== 3) {
  console.log(`usage: node sayMyName.js name`)
  process.exit(1)
}

console.log(`My name is ${process.argv[2]}`) */