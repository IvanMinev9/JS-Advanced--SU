function sum(arr) {
  arr = arr.map(Number);

  let result = arr[0] + arr[arr.length - 1];

  return result;
}
console.log(sum(["20", "30", "40"]));
console.log(`----------`);
sum(["5", "10"]);
