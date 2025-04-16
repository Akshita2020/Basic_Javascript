const hobbies = ["cooking", "reading", "hiking", "swimming", "gaming"];
const copiedHobbies = [...hobbies];
const editedHobbies = [...hobbies, "cycling"];
console.log(copiedHobbies);
console.log(editedHobbies);

const person = { name: "John", age: 30, occupation: "Developer" };
const copiedPerson = { ...person };
const editedPerson = { ...person, occupation: "Engineer" };
console.log(copiedPerson);
console.log(editedPerson);

// 🔍 WHY WE NEED SPREAD?
// ✅ Rest sirf functions ke arguments me kaam karta hai (collect karne ke liye).
// ✅ Spread ka use hota hai copy banane, merge karne, aur expand karne ke liye.
// Situation | Use
// Function ke andar values collect karni ho | REST
// Array ya object ko copy / merge / expand karna ho | SPREAD

// Rest operator

const toArray = (...args) => args;
console.log(toArray(1, 2, 3, 4, 5));
// Output: [1, 2, 3, 4, 5]
