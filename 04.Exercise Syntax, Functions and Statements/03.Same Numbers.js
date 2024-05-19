function sameNumber(num) {
	let isResult = true;
	let sum = 0;
	let digit = num % 10;

	while (num !== 0) {
		let curDig = num % 10;
		sum += curDig;

		if (curDig !== digit) {
			isResult = false;
		}
		num = Math.floor(num / 10);
	}
	console.log(isResult);
	console.log(sum);
}
sameNumber(2222222);
sameNumber(1234);
