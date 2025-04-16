const names = "akshita";
let age = 18;
let goodHobbies = true;
let globalVaribale = "global variable";
console.log(names, age, goodHobbies);

function user(names, age) {
  var localVariable = "I am a local variable";
  return "name is " + names + " and age is " + age;
}

console.log(user(names, age));
console.log(globalVaribale);
console.log(localVariable);
console.log((names = "tiwari"));
