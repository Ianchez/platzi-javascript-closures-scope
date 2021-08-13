//* hoisted var
a = 2;
var a;

console.log(a); // <<< 2


//# not hoisted
console.log(x); // <<< undefined
var x = 2;


//* hoisted function
nameOfDog('Capi');  // <<< 'Capi'

function nameOfDog(name) {
  console.log(name);
}

nameOfDog('Capi');  // <<< 'Capi'
