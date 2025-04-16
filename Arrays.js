let hobbies = [
  "reading",
  "writing",
  25,
  { name: "akshita" },
  true,
  null,
  undefined,
  [1, "akshita"],
];

// console.log(hobbies);

for (let hobby of hobbies) {
  //   console.log(hobby);
}

for (let hobby in hobbies) {
  //   console.log(hobby);
}

let hobbiesArray = ["sports", "cooking", "painting"];
let hobbiesSubsets = hobbiesArray.slice(0, 2);
// console.log(hobbiesSubsets);

let filtereHobbies = hobbiesArray.filter((val) => val !== "sports");
// console.log(filtereHobbies);

let updatedHobbies = hobbiesArray.map((val) => "hobby: " + val);
console.log(updatedHobbies);
