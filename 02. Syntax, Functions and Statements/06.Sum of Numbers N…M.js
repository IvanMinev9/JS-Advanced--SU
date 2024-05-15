function sum(n, m) {
  let sum = 0;
  let num1 = Number(n);
  let num2 = Number(m);
  for (let i = num1; i <= num2; i++) {
    sum += i;
  }
  return sum;
}
console.log(sum("1", "5"));
console.log(sum("-8", "20"));
