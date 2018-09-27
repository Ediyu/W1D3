

function countLetters(input) {
  var letters = {};
  input = input.replace(/ /g, "");
  input = input.split("");

  for (var i = 0; i < input.length; i++) {
    //if i replace letters[input[i]] to a variable, does not work;
    letters[input[i]] = letters[input[i]] || 0;
    letters[input[i]]++
    // var position = letters[random[i]];
    // if(!letters[random[i]]){
    // letters[random[i]] = 1;
    // } else {
    // letters[random[i]]++;
    // }
  }
  return letters;
  

}

function createObjectKeys(input) {
  input = input.replace(/ /g, "");
  input = input.split("");

  return input;
}

console.log(countLetters("abcdaaaaaa"))



///////////////////// BOTTOM IS THE TESTING PART ///////////////////////////


function createObjectKeys(input) {
  input = input.replace(/ /g, "");
  input = input.split("");
  var letters = {};

  for (var i =0; i< input.length; i++) {
    letters[input[i]] = 0;
  }
  return letters;
}

function countLetters(input) {
  var ObjectKeys = createObjectKeys(input);
  var test = Object.keys(ObjectKeys);
  var a = "a";
  console.log(ObjectKeys[test[0]])

  for (var i = 0; i < test.length; i++) {
    // //if i replace letters[test[i]] to a variable, does not work;

    ObjectKeys[i] = ObjectKeys[i] || 0;
    ObjectKeys[i]++;
    // var osition = letters[random[i]];
  //   if([i]){
  //   ObjectKeys[i] = 1;
  // } else {
  //   ObjectKeys[i]++;
  //   }
  }
  return ObjectKeys;
}

// console.log(createObjectKeys("abcefg"))
console.log(countLetters("abcdabcd"));


// var obj = {
//   'key1':'1',
//   '2':'2',
//   'key 1':'3'
// }

// console.log(obj.key1)
// console.log(obj['key1'])
// console.log(obj['2'])
// console.log(obj['key 1'])