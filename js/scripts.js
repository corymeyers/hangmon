
// function randomPuzzle(wordbank){
//   this.wordbank = wordbank
//   var puzzleWord = wordbank[Math.floor(Math.random() * wordbank.length)];
//   return puzzleWord;
// };
function Game(wordBank, letterList, guessedList){
  this.wordBank = wordBank
  this.letterList = letterList
  this.guessedList = guessedList
}

function Player(guess, lost, won){
  this.guess = guess
  this.lost = lost
  this.won = won
}
var wordSplitter = function(str){
var letterArray = str.split("");
return letterArray;
}

var wordSelector = function(){
var wordBank = ["marble", "minute", "beard", "courage", "rebel"]
var randWord = wordBank[Math.floor(Math.random()*wordBank.length)];
return randWord;
};
var replaceLetters = function(str){
var letters = /[a-zA-Z]/g;
var puzzleWord = "";

  if (letters.test(str)) {
    for(var i = 0; i< str.length; i++){
     puzzleWord = str.replace(letters, '_ ');
    }
  }
  return puzzleWord;
};
