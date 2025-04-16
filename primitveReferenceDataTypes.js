// Reference data types
const hobbies = ["reading", "cooking"];
hobbies.push("programming");

console.log(hobbies);

const hobbiesObject = {
  name: "akshita",
  type: "programming",
};

hobbiesObject.age = 20;
console.log(hobbiesObject);

const number = 10;
number = 20;
console.log(number);


let user = {name: "John Doe", age: 30};
let user2 = user;
user.age = 25;
console.log(user.age); // 25
console.log(user2.age); // 25

// Primitve data types 
let x = 10;
let y = x;
x = 20;
console.log(x); // 20
console.log(y); // 10
