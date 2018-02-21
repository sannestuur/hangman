function wrongGuessCount(word, guesses){
let wrongGuesses = [];
  for (let i = 0; i < guesses.length; i++){
    if (word.indexOf(guesses[i]) == -1) {
    wrongGuesses.push(guesses[i]);
    }
  }
  return wrongGuesses.length;

}

// console.log('test wrong guesses: ', wrongGuessCount('hello', ['e', 'd', 'x', 'o']) === 2);


function showGuess(word, guesses) {
  let answer = word.split('');
  let empty_answer = [];
  for (let i = 0; i < word.length; i++){
    let index_in_word = guesses.indexOf(word[i]);
    if (index_in_word == -1){
      empty_answer.splice(i, 0, "_");}
    else empty_answer.splice(i, 0, word[i]);
    }

  return empty_answer.join("");
}

// console.log('test show guess 1:', showGuess('hello', ['l']) === '_ _ l l _')
// console.log('test show guess 2:', showGuess('hello', ['l', 'a', 'e']) === '_ e l l _')

// function isWinner(word, guesses) {
//     console.log(showGuess(word, guesses));
//     console.log(word);
//     console.log(showGuess(word, guesses) == word);
//     console.log(guesses.length <= 6);
// }

function isWinner(word, guesses) {
    result = (showGuess(word, guesses) == word) && (guesses.length <= 6);
    return result
}

// console.log('test winner 1:', !isWinner('hello', ['e', 'x']))
// console.log('test winner 2:', isWinner('hello', ['o', 'l', 'e', 'h']))

// to read from the console
const readline = require('readline')
const rl = readline.createInterface({input:process.stdin, output:process.stdout})

function next(word, guesses) {
    // check if lost
    // check if won
    // ask for the next letter
    rl.question('next letter? ', answer => {
        console.log('player wrote:', answer)
        // do something with answer
    })
}
