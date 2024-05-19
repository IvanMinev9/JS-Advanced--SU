/**
 *
 * @param {Array} pieFlavors
 * @param {String} firstPie
 * @param {String} lastPie
 */

function solve(pieFlavors, firstPie, lastPie) {
  const firstPieIndex = pieFlavors.indexOf(firstPie);
  const lastPieIndex = pieFlavors.indexOf(lastPie);

  const result = pieFlavors.slice(firstPieIndex, lastPieIndex + 1);
  return result;
}
solve(
  [
    "Pumpkin Pie",
    "Key Lime Pie",
    "Cherry Pie",
    "Lemon Meringue Pie",
    "Sugar Cream Pie",
  ],
  "Key Lime Pie",
  "Lemon Meringue Pie"
);
console.log(
  solve(
    [
      "Pumpkin Pie",
      "Key Lime Pie",
      "Cherry Pie",
      "Lemon Meringue Pie",
      "Sugar Cream Pie",
    ],
    "Key Lime Pie",
    "Lemon Meringue Pie"
  )
);
