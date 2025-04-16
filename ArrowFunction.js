function myFunction(a, b) {
  return a + b;
}

const ArrowFunction = (a, b) => {
  return a + b;
};

const ArrowFunction2 = (a, b) => a + b;
const noArgument = () => 10;

console.log(
  myFunction(1, 2),
  ArrowFunction(1, 2),
  ArrowFunction2(1, 2),
  noArgument()
);
