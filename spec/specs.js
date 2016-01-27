// describe('Game', function(){
//   it("pulls a word from the wordBank", function(){
//     var testGame = new Game("marble", "minute", "beard");
//     var wordBank = ["marble"]
//     expect(testGame.wordBank().to.equal("marble");
//   });

// });

describe('Player', function(){

});

describe('wordSelector', function(){
  it('pulls a random word from an array', function(){
    expect(wordSelector("")).to.equal(wordSelector(""));
  });

  describe("wordSplitter", function(){
    it('takes the random word from wordSelector and splits it up into an array of one letter strings', function(){
      expect(wordSplitter("marble")).to.equal(["m", "a", "r", "b", "l", "e"])
    })
  });

  describe('replaceLetters', function(){
    it('finds all letters in a word and replaces them with underscore', function(){
      expect(replaceLetters("banana")).to.equal("_ _ _ _ _ _ ");
    });
  });
});
