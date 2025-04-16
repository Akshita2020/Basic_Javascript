const person = {
  name: "akshita tiwari",
  age: 20,
};
// console.log(person);

const person1 = {
  name: "akshita tiwari",
  age: 20,
  greet: () => {
    console.log("hello my name is " + this.name);
  },
};
// console.log(person1);
console.log(person1.greet());

const person2 = {
  name: "akshita tiwari",
  age: 20,
  greet: function () {
    console.log("hello my name is  " + this.name);
  },
};

// console.log(person2);
console.log(person2.greet());
