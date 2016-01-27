// describe('toDoList', function() {
//   it("creates a new list item with the given properties", function() {
//     var testToDoList = new toDoList("clean the house", "high", "Wednesday");
//     expect(testToDoList.task).to.equal("clean the house");
//     expect(testToDoList.priority).to.equal("high");
//     expect(testToDoList.deadline).to.equal("Wednesday");
//     expect(testToDoList.entire_task).to.eql([]);
//
//
//   });
// });

describe('randomPuzzle', function(){
  it("will take an array of words and return a random selection", function(){
    var testRandomPuzzle = new randomPuzzle(["cat", "dog", "mouse"]);
    expect(testRandomPuzzle).to.equal("cat" || "dog" || "mouse");
  });
});
