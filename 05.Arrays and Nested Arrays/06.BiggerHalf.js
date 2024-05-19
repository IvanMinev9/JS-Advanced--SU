function bigger(arr) {
  arr.sort((a, b) => a - b);
  let secondHalf = Math.ceil((arr.length - 1) / 2);
  let biggerHalf = arr.slice(secondHalf);

  return biggerHalf;
}
console.log(bigger([4, 7, 2, 5]));
bigger([3, 19, 14, 7, 2, 19, 6]);
