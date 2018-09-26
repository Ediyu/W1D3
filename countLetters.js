

function countLetters(input) {
  var letters = {};
  input = input.replace(/ /g, "");
  input = input.split("");

  for (var i = 0; i < input.length; i++) {
    letters[input[i]] = 0;
    //do I put a Conditional here? or create a separate function?
    if(letters[input[i]] == "h") {
      letters[input.l] = +1;
    } 

  }

  return letters;

}

console.log(countLetters("lighthouse in the house"));