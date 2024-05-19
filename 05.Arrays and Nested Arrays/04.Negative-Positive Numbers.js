function solve(arr) {
  let result = [];

  for (let el of arr) {
    if (el < 0) {
      result.unshift(el);
    } else if (el >= 0) {
      result.push(el);
    }
  }
  console.log(result.join(`\n`));
}
solve([7, -2, 8, 9]);
console.log(`---------`);
solve([3, -2, 0, -1]);
