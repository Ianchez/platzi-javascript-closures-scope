const fruits = () => {
  if (true) {
    var fruits1 = 'apple';
    let fruits2 = 'banana';
    const fruits3 = 'kiwi';
  }
  
  console.log(fruits1); // <<< 'apple'
  console.log(fruits2); // <<< ReferenceError: fruits2 is not defined
  console.log(fruits3); // <<< ReferenceError: fruits3 is not defined
};

fruits();


// ----------------------

let x = 1;
{
  let x = 2;
  console.log(x);  // << 2
}
console.log(x);  // << 1

var y = 1;
{
  var y = 2;
  console.log(y);  // << 2
}
console.log(y);  // << 2

// ----------------------

// with var
const anotherFunction = () => {
  for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);  // <<< 10, 10, 10, 10, 10, 10, 10, 10, 10, 10
    }, 1000)
  }
}
anotherFunction();

// with let
const anotherFunction = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);  // <<< 1, 2, 3, 4, 5, 7, 8, 9, 10
    }, 1000)
  }
}
anotherFunction();