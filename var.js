var names = "akshita";
var age = 18;
var goodHobbies = true;
var globalVaribale = "global variable";
console.log(names, age, goodHobbies);

function user(names, age) {
  var localVariable = "I am a local variable";
  return "name is " + names + " and age is " + age;
}

console.log(user(names, age));
console.log(globalVaribale);
console.log(localVariable);

