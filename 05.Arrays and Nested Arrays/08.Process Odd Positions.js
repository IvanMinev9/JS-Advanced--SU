function solve(arr) {
  let oddPosition = arr.filter((number, index) => index % 2 !== 0);
  let doubleNumber = oddPosition.map((number) => number * 2);
  let reverst = doubleNumber.reverse();
  console.log(reverst);
}
solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);
