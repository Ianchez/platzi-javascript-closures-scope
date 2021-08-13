const buildCount = (i) => {
  let count = i;

  const displayCount = () => {
    console.log(count++);
  }

  return displayCount;
};

const myCount = buildCount(1);

myCount(); // <<< 1
myCount(); // <<< 2
myCount(); // <<< 3
myCount(); // <<< 4
myCount(); // <<< 5
myCount(); // <<< 6

const otherCount = buildCount(10);

otherCount(); // <<< 10
otherCount(); // <<< 11
otherCount(); // <<< 12
otherCount(); // <<< 13