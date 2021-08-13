const fruits = () => {
  var fruit = 'apple';
  console.log(fruit);
};

fruits();
console.log(fruit); // <<< ReferenceError: fruit is not defined

// -------------------

const anotherFunction = () => {
  var x = 1;
  var x = 2;
  let y = 1;
  let y = 2; // <<< SyntaxError: Identifier 'y' has already been declared

  console.log(x);
  console.log(y);
}

anotherFunction();