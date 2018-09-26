

function countLetters(input) {
  var letters = {};
  var random = createObjectKeys(input);

  for (var i = 0; i < random.length; i++) {
    var position = letters[random[i]]
    if(!position){
    position = 1;
    } else {
    position++;
    }
  }
  return letters;
}

function createObjectKeys(input) {

  input = input.replace(/ /g, "");
  input = input.split("");

  return input
}

console.log(countLetters("lighthouse in the house"));