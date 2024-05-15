function lengthStr(arr1, arr2, arr3) {
  let sum = 0;
  let avgLength = 0;

  let result1 = arr1.length;
  let result2 = arr2.length;
  let result3 = arr3.length;

  sum = result1 + result2 + result3;
  avgLength = sum / 3;
  console.log(sum);
  console.log(Math.floor(avgLength));
}

lengthStr("chocolate", "ice cream", "cake");
lengthStr("pasta", "5", "22.3");
