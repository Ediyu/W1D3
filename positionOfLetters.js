

function positionIndices(input) {
  var letters = {};
  input = input.replace(/ /g, "");
  input = input.split("");
  var arrays = [];


  for (var i = 0; i < input.length; i++) {

    if(!letters[input[i]]){
    letters[input[i]] = input.indexOf(input[i]);
    } else {
    letters[input[i]] += ", "+i;
    }
  }
  return letters;

}

console.log(positionIndices("hello world"));

// function positionIndices(input) {
//   var letters = {};
//   var array = createObjectKeys(input);

//   for (var i = 0; i < array.length; i++) {

//     if(!letters[array[i]]){
//     letters[array[i]] = array[i].indexOf(array[i]);
//     } else {
//     letters[array[i]] += ", "+ String(array[i]).charAt();
//     }
//   }
//   return letters;

// }

// function createObjectKeys(input) {

//   input = input.replace(/ /g, "");
//   input = input.split("");

//   return input
// }

// console.log(positionIndices("hello world"));