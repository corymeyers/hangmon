
// function randomPuzzle(wordbank){
//   this.wordbank = wordbank
//   var puzzleWord = wordbank[Math.floor(Math.random() * wordbank.length)];
//   return puzzleWord;
// };
var wordBank = ["marble", "minute", "beard", "courage", "rebel"];

function Game(player){
  // this.letterList = letterList;
  // this.guessedList = guessedList;
  this.player = player;
  this.puzzleWord = "";
  this.guessResult = false
}

function Player(guess, lost, won){
  this.guess = guess;
  this.lost = lost;
  this.won = won;
}



Game.prototype.guessLetter = function(guess){
  var puzzleArray = this.puzzleWord.split("")
  if(puzzleArray.includes(guess)){
    return true
    //show or reveal character in word
  }else{
    return false
  }
}

Game.prototype.randWord= function() {
  //var wordBank = ["marble", "minute", "beard", "courage", "rebel"]
  var randWord = wordBank[Math.floor(Math.random()*wordBank.length)];
  this.puzzleWord = randWord;
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
