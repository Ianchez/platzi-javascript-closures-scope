//! with 'var'
const anotherFunction = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);  // <<< 1, 2, 3, 4, 5, 7, 8, 9, 10
    }, 1000)
  }
}
anotherFunction();