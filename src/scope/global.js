var hello = 'Hello';
var hello = 'Hello +';
let world = 'World';
// let world = 'World +'; << SyntaxError - wont let reassing
// const helloWorld = 'Hello World!';

const anotherFunction = () => {
  console.log(hello);
  console.log(world);
  // console.log(helloWorld);
};

anotherFunction();

// Bad practice ---------------
const helloWorld = () => {
  globalVar = 'im global';
}

helloWorld();
console.log(globalVar);
// ----------------------------

// Bad practice 2 ---------------
const anotherFunction = () => {
  var localVar = globalVar = 'Im Global';
}

anotherFunction();
console.log(globalVar)
// ------------------------------