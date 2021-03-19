const showStars = (nbBase, caract, reverse) => {
  if (reverse === 0) {

    for (let i = 1; i <= nbBase; ++i) {
      console.log(caract.repeat(i))
    }
  } else if (reverse === '-r') {
    for (let i = nbBase; i >= 1; --i)
      console.log(caract.repeat(i))
  }
}


if (!(process.argv.length === 4 || (process.argv[4] === '-r' && process.argv.length === 5))) {
  console.log(`usage: node pyramid.js number caractere`)
  process.exit(1)
}

if (isNaN(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} is not a number.`)
  process.exit(1)
}





const nbBase = process.argv[2]
const caract = process.argv[3]
const reverse = process.argv[4] ?? 0


showStars(nbBase, caract, reverse)






