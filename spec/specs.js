// describe('Game', function(){
//   it("pulls a word from the wordBank", function(){
//     var testGame = new Game("marble", "minute", "beard");
//     var wordBank = ["marble"]
//     expect(testGame.wordBank().to.equal("marble"));
//   });
//
// });

describe('randWord', function(){
  it('pulls a random word and assigns it to the game', function(){
    var testGame = new Game();
    // expect(testGame.randWord()).to.equal(true);
    expect(wordBank.includes(testGame.randWord())).to.equal(true);
    //console.log(wordBank);
  });
});

  describe("guessLetter", function(){
    it("takes input from user and returns if it is right or wrong", function(){
      var testGame = new Game();
      testGame.randWord();
      expect(testGame.guessLetter("e")).to.equal(true);
      //expect(testGame.guessLetter("z")).to.equal(false);
    });
});
//   describe("wrongAnswerTabulator", function(){
//     it("tabulates all wrong answers", function(){
//       var testGame = new Game();
//       testGame.guessLetter('z');
//       expect(testGame.wrongAnswerTabulator()).to.equal(1);
//     });
// });
describe("checkIfWon", function(){
  it("checks if the puzzle is solved", function(){
    var testGame = new Game();
    testGame.guessLetter();
    // expect(testGame.checkIfWon)
    //expect(testGame.checkIfLost('z','x','q','k')).to.equal(true);
  });
});
  describe("checkIfLost", function(){
    it("checks if the limit has been reached for wrong answers and ends game", function(){

      var testGame = new Game();
      testGame.guessLetter();
      //expect(testGame.checkIfLost('z','x','q','k')).to.equal(true);
    });
});
  describe('replaceLetters', function(){
    it('finds all letters in a word and replaces them with underscore', function(){
      var testGame = new Game();
      testGame.setWord('fear');
      testGame.guessLetter('e');
      expect(testGame.replaceLetters()).to.equal("_e__");
    });
  });
