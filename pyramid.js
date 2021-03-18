const showStars = (nbBase, caract) => {
  for (let i = 1; i <= nbBase; i += 1) {
    console.log(caract.repeat(i))
  }
}

if (process.argv.length !== 4) {
  console.log(`usage: node pyramid.js number caractere`)
  process.exit(1)
}

showStars(process.argv[2], process.argv[3])
