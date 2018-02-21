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

  return empty_answer.join(" ");
}

console.log(showGuess('hello', ['l', 'a', 'e']) + 'x');

console.log('test show guess 1:', showGuess('hello', ['l']) === '_ _ l l _')
console.log('test show guess 2:', showGuess('hello', ['l', 'a', 'e']) === '_ e l l _')
