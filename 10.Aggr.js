function aggregate(arr) {
  let invert = 0;

  let sum = arr.reduce((a, b) => a + b);

  for (let i = 0; i < arr.length; i++) {
    invert += 1 / arr[i];
  }

  let concatenation = arr.join(``);

  console.log(sum);
  console.log(invert);
  console.log(concatenation);
}
aggregate([1, 2, 3]);
console.log(`-------------`);
aggregate([2, 4, 8, 16]);
