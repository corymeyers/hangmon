// describe('Game', function(){
//   it("pulls a word from the wordBank", function(){
//     var testGame = new Game("marble", "minute", "beard");
//     var wordBank = ["marble"]
//     expect(testGame.wordBank().to.equal("marble"));
//   });
//
// });

describe('Player', function(){

});

describe('randWord', function(){
  it('pulls a random word and assigns it to the game', function(){
    var testGame = new Game("Courtney");
    // expect(testGame.randWord()).to.equal(true);
    expect(wordBank.includes(testGame.randWord())).to.equal(true);
    //console.log(wordBank);
  });

  describe("wordSplitter", function(){
    it('takes the random word from wordSelector and splits it up into an array of one letter strings', function(){
      expect(wordSplitter("marble")).to.eql(["m", "a", "r", "b", "l", "e"]);
    });
  });
  describe("guessLetter", function(){
    it("takes input from user and tests it against the array from wordSplitter", function(){
      expect(guessLetter("z")).to.equal(false);
    });
  });
  describe('replaceLetters', function(){
    it('finds all letters in a word and replaces them with underscore', function(){
      expect(replaceLetters("banana")).to.equal("_ _ _ _ _ _ ");
    });
  });
});
