function math(num1, num2, action) {
  let result = 0;

  switch (action) {
    case `+`:
      result = num1 + num2;
      break;

    case `-`:
      result = num1 - num2;
      break;

    case `*`:
      result = num1 * num2;
      break;

    case `/`:
      result = num1 / num2;
      break;

    case `%`:
      result = num1 % num2;
      break;

    case `**`:
      result = num1 ** num2;
      break;
  }
  console.log(result);
}
math(5, 6, "+");
math(3, 5.5, "*");
