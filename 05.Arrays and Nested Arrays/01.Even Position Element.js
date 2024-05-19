function evenPElement(arr) {
  let evenP = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      evenP.push(arr[i]);
    }
  }
  console.log(evenP.join(` `));
}
evenPElement(["20", "30", "40", "50", "60"]);
