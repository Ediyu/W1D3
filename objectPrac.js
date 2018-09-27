var Utility = {
  printName: function() {
    return this.firstName;
  },

  printFullName: function() {
    return this.firstName + " " + this.lastName;
  },

};

var person1 = {
  printName: Utility.printName,
  firstName: "Bob",
  lastName: "Carlos",
  printFullName: Utility.printFullName,
  hello: function(){
    return this.firstName + this.lastName
  }
}

// console.log(person1.hello());

var music = {
  name : {
    first: "Peter",
    last: "Last",
    origin: {
      country: "Korea",
      city: "Seoul",
      },
    from: function (){
        return this.city + this.country;
    }
  }
}

console.log(music.name;