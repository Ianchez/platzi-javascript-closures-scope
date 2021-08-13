const person = () => {
  var savedName = 'Name'; // private variable

  return {
    getName: () => savedName,
    setName: (name) => savedName = name
  }
}

newPerson = person();
console.log(newPerson.getName()); // <<< 'Name'
newPerson.setName('Oscar');
console.log(newPerson.getName()); // <<< 'Oscar'
console.log(newPerson.savedName); // <<< undefined