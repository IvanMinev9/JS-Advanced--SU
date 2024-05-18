function sameNumber(num) {
  let sum = 0;
  let result = true;
  let digit = num % 10;

  while (num !== 0) {
    let curDig = num % 10;
    sum += curDig;

    if (curDig !== digit) {
      return false;
    }
    num = Math.floor(num / 10);
  }
}
sameNumber(2222222);
sameNumber(1234);
