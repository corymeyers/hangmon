var wordBank = ["marble", "minute", "beard", "courage", "rebel"];

function Game(){
  this.guesses = "";
  this.wrongAnswer = 0;
  this.puzzleWord = "";
  this.blankWord = "";
};
Game.prototype.setWord = function(word) {
  this.puzzleWord = word;
}
Game.prototype.randWord= function() {
  var newGame = new Game();
  var randWord = wordBank[Math.floor(Math.random()*wordBank.length)];
  this.puzzleWord = randWord;
  // return this.puzzleWord
  console.log(this.puzzleWord);

  // return this.puzzleWord;
};

Game.prototype.guessLetter = function(guess){
  //var puzzleArray = this.puzzleWord.split("");
  this.guesses += guess;
  //console.log(this.puzzleWord);
  if(this.puzzleWord.includes(guess)){
      //call replaceLetters function
    console.log('right');
    this.replaceLetters(guess);
    return true;

      //this.guessResult = true;
      //show or reveal character in word
    } else {
    //console.log('wrong');
     this.checkIfLost();
    return false;
//call checkIfLost function
    };
};

Game.prototype.replaceLetters = function(){
  // this.guesses += guess;
  var letters = new RegExp( '[^'+ this.guesses +']', 'gi');



 this.blankWord = this.puzzleWord.replace(letters, '_');

 console.log(this.blankWord);
};

// Game.prototype.wrongAnswerTabulator = function(){
//
//   this.wrongAnswer +=1;
// console.log(this.wrongAnswer);
//   return this.wrongAnswer;
//   }

Game.prototype.checkIfWon = function(){
  if(this.puzzleWord === this.blankWord){
    console.log(checkIfWon);
    return true;
  }else{
    return false;
  }
}

Game.prototype.checkIfLost = function(){
  if(this.wrongAnswer === -1){
    //$('#imageField').append("<img src='img/gallows.png'>")
  } else if(this.wrongAnswer === 0){
    $('#imageField').prepend("<img src='img/head.png'>");
    console.log('head');
    console.log('keep guessing');
    this.wrongAnswer +=1;
  } else if(this.wrongAnswer === 1){
      $('#imageField').prepend("<img src='img/torso.png'>");
      console.log('keep guessing');
      this.wrongAnswer +=1;
  } else if(this.wrongAnswer === 2){
        $('#imageField').prepend("<img src='img/arms.png'>");
        console.log('keep guessing');
    this.wrongAnswer +=1;
  } else if(this.wrongAnswer === 3){
          $('#imageField').prepend("<img src='img/dead.png'>");
          console.log('game over');
          return true
  } else {
    console.log('keep guessing');
    this.wrongAnswer +=1;
    return false;
  };
};

function updateUI(newGame) {
  $(".hiddenWord").html('<h1>' + newGame.blankWord + '</h1>');
  }

$(document).ready(function(){
  var newGame = new Game();
  newGame.randWord();
  newGame.replaceLetters();
  console.log(newGame.blankWord);
  // console.log(randWord);
  console.log(newGame.puzzleWord);
  // this.puzzleWord = 'word';
  updateUI(newGame);
    $("form#userInput").submit(function(event) {
      var guess = $("input#guess").val();
      newGame.guessLetter(guess);
      updateUI(newGame);
      if (newGame.blankWord === newGame.puzzleWord) {
        alert("you won!");
      }else{
      console.log("keep tryin!");
    }
      event.preventDefault();
    });
});
  //
