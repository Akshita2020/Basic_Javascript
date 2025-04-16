const person = { name: "John", age: 30, occupation: "Developer" };

// const name = person.name;
// const age = person.age;
// const occupation = person.occupation;

// const { name, age, occupation } = person;

const { occupation, ...rest } = person;
// console.log(name, age, occupation);
console.log(rest);

const numbers = [1, 2, 3, 4, 5];
// const First = numbers[0];
// const Second = numbers[1];
// const Third = numbers[2];

const [First, Second, Third] = numbers;
console.log(First, Second, Third);
