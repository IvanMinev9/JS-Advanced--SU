function solve(number) {
  let grid = ``;
  for (let i = 1; i <= number; i++) {
    grid = ``;

    for (let j = 1; j <= number; j++) {
      grid += `* `;
    }
    console.log(grid);
  }
}
solve(7);
