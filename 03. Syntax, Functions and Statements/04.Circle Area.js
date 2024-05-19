function area(data) {
  let result = 0;
  let typeData = typeof data;
  if (typeData !== `number`) {
    console.log(
      `We can not calculate the circle area, because we receive a ${typeData}.`
    );
  } else {
    result = Math.pow(data, 2) * Math.PI;
    console.log(result.toFixed(2));
  }
}
area(5);
area("name");
