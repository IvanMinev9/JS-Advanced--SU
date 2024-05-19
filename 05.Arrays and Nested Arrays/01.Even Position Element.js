function evenPElement(arr) {
  let evenP = [];

  for (let el of arr) {
    let tokens = el.split(`, `);
    tokens = Number(tokens);

    if (tokens % 2 == 0) {
      evenP.push(tokens);
    }
  }
  console.log(evenP);
}
evenPElement(["20", "30", "40", "50", "60"]);
