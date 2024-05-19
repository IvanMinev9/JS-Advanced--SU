function biggestElement(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] > result) {
        result = array[i][j];
      }
    }
  }
  return result;
}
console.log(
  biggestElement([
    [20, 50, 10],
    [8, 33, 145],
  ])
);
console.log(`-----------`);
biggestElement([
  [3, 5, 7, 12],
  [-1, 4, 33, 2],
  [8, 3, 0, 4],
]);
