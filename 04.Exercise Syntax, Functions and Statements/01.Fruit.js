function fruit(fruitType, grams, price) {
  let gramsInKilos = grams / 1000;

  let moneyNeeded = gramsInKilos * price;

  console.log(
    `I need $${moneyNeeded.toFixed(2)} to buy ${gramsInKilos.toFixed(
      2
    )} kilograms ${fruitType}.`
  );
}
fruit("orange", 2500, 1.8);
fruit("apple", 1563, 2.35);
