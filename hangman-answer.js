function wrongGuessCount(word, guesses){
  return guesses
    .filter(guess => word.indexOf(guess) === -1)
    .length
}

// console.log('test wrong guesses: ', wrongGuessCount('hello', ['e', 'd', 'x', 'o']) === 2)


function showGuess(word, guesses) {
  return word
  .split('')
  .map(char => {
    if (guesses.includes(char)) return char
    return '_'})
  .join(' ');
}

// console.log(showGuess('hello', ['l']))
// console.log(showGuess('hello', ['l', 'a', 'e']))
//
//
// console.log('test show guess 1:', showGuess('hello', ['l']) === '_ _ l l _')
// console.log('test show guess 2:', showGuess('hello', ['l', 'a', 'e']) === '_ e l l _')


function isWinner(word, guesses){
  return word.split('').join(' ') === showGuess(word, guesses)
}

// console.log('test winner 1:', !isWinner('hello', ['e', 'x']))
// console.log('test winner 2:', isWinner('hello', ['o', 'l', 'e', 'h']))


// to read from the console
const readline = require('readline')
const rl = readline.createInterface({input:process.stdin, output:process.stdout})

function next(word, guesses) {
    // check if lost
    if (wrongGuessCount(word, guesses) > 6) {
      rl.close();
      return console.log('You lost!')
    }
    // check if won
    if (isWinner(word, guesses)) {
      rl.close();
      return console.log('You won!')
    }
    // ask for the next letter
    rl.question('next letter? ', answer => {
        console.log('player wrote:', answer)
        // do something with answer
        guesses.concat(answer.split(''));
        console.log(showGuess(word, guesses.concat(answer.split(''))))
        console.log(guesses.concat(answer))
        next(word, guesses.concat(answer))
    })
}

next('hello', []);
