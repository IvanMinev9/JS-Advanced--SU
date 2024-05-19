function smallNumber(arr) {
  arr.sort((a, b) => a - b);
  let result = arr.slice(0, 2);

  console.log(result.join(` `));
}
smallNumber([30, 15, 50, 5]);
smallNumber([3, 0, 10, 4, 7, 3]);
