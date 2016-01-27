
// function randomPuzzle(wordbank){
//   this.wordbank = wordbank
//   var puzzleWord = wordbank[Math.floor(Math.random() * wordbank.length)];
//   return puzzleWord;
// };
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
