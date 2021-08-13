//! without closure
const moneyBox = (coins) => {
  var saveCoins = 0;
  saveCoins += coins;

  console.log(`MoneyBox: $${saveCoins}`);
};

moneyBox(5);  // <<< 5
moneyBox(10); // <<< 10
moneyBox(3);  // <<< 3

// ----------------------------------------------------------------------------

//* with closure
const moneyBox = (coins) => {
  var saveCoins = 0;

  const countCoins = (coins) => {
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
  }

  return countCoins;
};

const myMoneyBox = moneyBox();

myMoneyBox(5);  // <<< 5
myMoneyBox(10); // <<< 15
myMoneyBox(6);  // <<< 21