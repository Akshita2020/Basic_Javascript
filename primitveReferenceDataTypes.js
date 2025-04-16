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

let user = { name: "John Doe", age: 30 };
let user2 = user;
user.age = 25;
console.log(user.age); // 25
console.log(user2.age); // 25

// In the second example, the value of user.age is changed to 25,
//  and the value of user2.age also changes to 25, because user and user2 are reference data types,
//  and they reference the same object in memory, so changing one of them will change the other.

// Primitve data types
let x = 10;
let y = x;
x = 20;
console.log(x); // 20
console.log(y); // 10

// In the first example, the value of x is changed to 20,
//  but the value of y remains 10, because x and y are primitive data types and
//   they have different memory location.
