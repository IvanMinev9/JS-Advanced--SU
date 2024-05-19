function solve(length, k) {
  let = firstEl = [1];

  for (let i = 1; i < length; i++) {
    let starIndex = Math.max(0, i - k);
    let currEl = firstEl
      .slice(starIndex, starIndex + k)
      .reduce((a, b) => a + b, 0);
    firstEl.push(currEl);
  }
  return firstEl;
}
console.log(solve(6, 3));
