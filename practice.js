

function fullName() {
  return this.firstName + " " + this.lastName;
};

function sayHi() {
  return "Hello, " + this.fullName();
}

var person1 = {
  firstName: "Peter",
  lastName: "Han",
  age: 28,
  country: "Korea",
};

function introduction() {
  return "Hello ," + " my name is " + this.firstName + " " + this.lastName + " and I am from " + this.country + 
  " and am " + this.age + " years old"
}

var person2 = {
  firstName: "Joe",
  lastName: "Smith",
  age: 30,
  country: "Canada",
};
person2.fullName = fullName;
person2.sayHi = sayHi;

person1.fullName = fullName;
person1.sayHi = sayHi;

person1.intro = introduction;

console.log(person1.intro());